import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { Patient } from "../patient/patient";
import { GmhisUtils } from "../shared/base/utils";
import { PAGINATION_DEFAULT_SIZE, PAGINATION_SIZE } from "../shared/constant";
import { GMHISPagination } from "../shared/models/gmhis-domain";
import { User } from "../_models";
import { PageList } from "../_models/page-list.model";
import { NotificationService, UserService } from "../_services";
import { NotificationType } from "../_utilities/notification-type-enum";
import { GMHISHospitalizationCreate, GMHISHospitalizationPartial } from "./api/domain/gmhis-hospitalization";
import { GmhisHospitalizationService } from "./api/service/gmhis.hospitalization.service";
import { GMHISHospitalizationPdfService } from "./api/service/gmhis.hospitalzation.service.pdf";

@Component({selector: 'gmhis-hospitalizations',templateUrl: './gmhis-hospitalizations.component.html', providers: [GMHISHospitalizationPdfService]})
export class GMHISHospitalizationsComponent implements OnInit {
 
  readonly TITLE = 'hospitalisations';
  readonly NEW_HOSPITALIZATION = 'Nouvelle Hospitalisation';

  readonly sizes = PAGINATION_SIZE;

  @Input() patientID?: number;

  @Input() showAllProtocole: boolean = false;

  @Input() showAddProtocole: boolean = false;

  subscription: Subscription = new Subscription()

  public searchFieldsForm: FormGroup;

  public hospitalizationSelected : GMHISHospitalizationPartial;

  pagination: GMHISPagination = {};

  loading: boolean;

  currentIndex: number;

  @ViewChild('hospitalizationTab', {static: false}) table: HTMLElement;

  docSrc: string;

  patient: Patient;

  nurseID: number;

  closeFieldGroup: FormGroup = new FormGroup({});
  nurses: User[];

  protocoles: { id: string; description: string; }[];

  constructor(
    private hospitalizationService: GmhisHospitalizationService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private hospitalizationPdfService: GMHISHospitalizationPdfService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.buildFields();
    this.buildCloseFields();
    this.search();
    this.findUsers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 

  public closeHospitalization(): void {
      let hospitalizationCreate : GMHISHospitalizationCreate = this.closeFieldGroup.value;      
      
    this.subscription.add(
      this.hospitalizationService.close(this.hospitalizationSelected.id,hospitalizationCreate)
      .pipe(finalize(()=> this.loading = false))
      .subscribe(
        (response : GMHISHospitalizationPartial) => {
            this.notificationService.notify(NotificationType.SUCCESS, "Hospitalisation Terminé avec succés");
            this.modalService.dismissAll();
            this.search();
        },
        (errorResponse : HttpErrorResponse) => {
            this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
        }
      )
  )
  }

  public onAddNurse(): void {
    this.subscription.add(
      this.hospitalizationService.addNurse(this.hospitalizationSelected.id,this.nurseID)
      .pipe(finalize(()=> this.loading = false))
      .subscribe(
        (response : GMHISHospitalizationPartial) => {
            this.notificationService.notify(NotificationType.SUCCESS, "Hospitalisation Attribué avec succés");
            this.modalService.dismissAll();
            this.search();
        },
        (errorResponse : HttpErrorResponse) => {
            this.notificationService.notify( NotificationType.ERROR, errorResponse.error.message);
        }
      )
  )
  }

  public onPrint(invoiceDocRef): void {   
    let doc = this.hospitalizationPdfService.buildhospitalizationCrCertificatePdf(this.hospitalizationSelected);
    this.modalService.open(invoiceDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
}


  public rowSelected( hospitalization : GMHISHospitalizationPartial, index: number): void {
    this.currentIndex = index;
    this.hospitalizationSelected = hospitalization;
  }

  public onHospitalizationDbClicked(recordRef, hospitalization : GMHISHospitalizationPartial): void {
    this.hospitalizationSelected = hospitalization;
      this.modalService.open(recordRef, {size: 'lg'})
  }

  public onPageChange(event) {
    this.searchFieldsForm.get('page').setValue(event - 1);
    this.search();
  }

  public onSearchValueChange(): void {
    this.search();
  }

  private buildFields(): void {
    this.searchFieldsForm = new FormGroup({
      patientID: new FormControl(this.patientID),
      page: new FormControl(0),
      size: new FormControl(PAGINATION_DEFAULT_SIZE),
      sort: new FormControl('id,desc'),
    })
  }

  private search(): void {
    this.loading = true;
    this.subscription.add(
      this.hospitalizationService.search(this.searchFieldsForm.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (response: PageList) => {
         GmhisUtils.pageListMap(this.pagination, response);     
         console.log(this.pagination.items);
             
        },
        (errorResponse: HttpErrorResponse) => {         
        }
      )
    )
  }


  public onOpenCreateForm(hospitalizationFormRef):void {
    this.modalService.open(hospitalizationFormRef, { size: 'xl' });
  }

  public onOpenUpdateForm(hospitalizationFormRef, item?):void {
    this.hospitalizationSelected = item;
    this.modalService.open(hospitalizationFormRef, { size: 'md' });
  }

  public onOpenCloseForm(closeFormRef: any): void {
    this.onModal(closeFormRef);
  }

  public onShowProtocol(protocolModalRef: any): void {
    this.subscription.add(
      this.hospitalizationService.findProtocoles(this.hospitalizationSelected.id).subscribe(
        (response: {id: string, description: string}[]) => {
          this.protocoles = response;
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          
        }
      )
    )
    this.onModal(protocolModalRef, 'lg');
  }

  onOpenNurseallOction(allocationModalRef: any): void {
    this.modalService.open(allocationModalRef, { size: 'md' });
  }

  private onModal(ModalRef: any,size: string = 'xl'): void {
    this.modalService.open(ModalRef, { size: size });
  }

  public handleHospitalizationSaveEvent(): void{
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Hospitalisation Crée avec succès');
    this.search();
  }

  public handleHospitalizationUpdateEvent():void {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Hospitalisation modifiée avec succès');
    this.search();
  }

  private buildCloseFields(): void {
    this.closeFieldGroup = new FormGroup({
        end: new FormControl(null,Validators.required),
        conclusion: new FormControl(null,Validators.required),
    })
  }

  get endField() {return this.closeFieldGroup.get('end')}
  get conclusionField() {return this.closeFieldGroup.get('conclusion')}


  private findUsers(): void {
    this.subscription.add(
      this.userService.findAllActive().subscribe(
        (usersFounded: User[]) => {
          this.nurses = usersFounded;
          console.log(this.nurses);
          
        },
        (errorResponse: HttpErrorResponse) => {         
        }
      )
    )
  }
}