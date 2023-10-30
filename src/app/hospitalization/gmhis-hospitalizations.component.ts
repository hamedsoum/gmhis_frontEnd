import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { Patient } from "../patient/patient";
import { PatientService } from "../patient/patient.service";
import { GmhisUtils } from "../shared/base/utils";
import { PAGINATION_DEFAULT_SIZE, PAGINATION_SIZE } from "../shared/constant";
import { GMHISPagination } from "../shared/models/gmhis-domain";
import { PageList } from "../_models/page-list.model";
import { NotificationService } from "../_services";
import { NotificationType } from "../_utilities/notification-type-enum";
import { GMHISHospitalizationCreate, GMHISHospitalizationPartial } from "./api/domain/gmhis-hospitalization";
import { GmhisHospitalizationService } from "./api/service/gmhis.hospitalization.service";
import { GMHISHospitalizationPdfService } from "./api/service/gmhis.hospitalzation.service.pdf";

@Component({selector: 'gmhis-hospitalizations',templateUrl: './gmhis-hospitalizations.component.html', providers: [GMHISHospitalizationPdfService]})
export class GMHISHospitalizationsComponent implements OnInit {
 
readonly TITLE = 'hospitalisations';
readonly NEW_HOSPITALIZATION = 'Nouvelle Hospitalisation';

readonly sizes = PAGINATION_SIZE;


subscription: Subscription = new Subscription()

public searchFieldsForm: FormGroup;

public hospitalizationSelected : GMHISHospitalizationPartial;

pagination: GMHISPagination = {};

loading: boolean;

currentIndex: number;

@ViewChild('hospitalizationTab', {static: false}) table: HTMLElement;

docSrc: string;

patient: Patient;

closeFieldGroup: FormGroup = new FormGroup({});

  constructor(
    private hospitalizationService: GmhisHospitalizationService,
    private notificationService: NotificationService,
    private modalService: NgbModal,
    private hospitalizationPdfService: GMHISHospitalizationPdfService,
    private patientService: PatientService


  ) { }

  ngOnInit(): void {
    this.buildFields();
    this.buildCloseFields();
    this.search()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 

  public closeHospitalization(): void {
      let hospitalizationCreate : GMHISHospitalizationCreate = this.closeFieldGroup.value;
      
      console.log(this.hospitalizationSelected.id);
      console.log(hospitalizationCreate);
      
      
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

  public onPrint(invoiceDocRef): void {   
    let doc = this.hospitalizationPdfService.buildhospitalizationCrCertificatePdf(this.hospitalizationSelected);
    this.modalService.open(invoiceDocRef, { size: 'xl' });
    this.docSrc = doc.output('datauristring'); 
}


  public onHospitalizationSelected( hospitalization : GMHISHospitalizationPartial): void {
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

  onOpenCloseForm(closeFormRef): void {
    this.modalService.open(closeFormRef, { size: 'md' });
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

}