import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { ActCategoryService } from "src/app/act/category/service/act-category.service";
import { GmhisUtils } from "src/app/shared/base/utils";
import { PAGINATION_SIZE } from "src/app/shared/constant";
import { GMHISPagination } from "src/app/shared/models/gmhis-domain";
import { GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { PageList } from "src/app/_models/page-list.model";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISEvacuationPartial } from "../api/domain/evacuation.domain";
import { GMHISEvacuationPDFService } from "../api/service/evacuation-pdf.service";
import { GmhisEvacuationService } from "../api/service/gmhis.evacuation.service";


@Component({ selector: 'gmhis-evacuations', templateUrl: './gmhis-evacuations.component.html', providers: [GMHISEvacuationPDFService]})
export class GMHISEvacuationsComponent implements OnInit, OnDestroy {

    @Input() styleClass?: string;

    @Input() evacuation?: GMHISEvacuationPartial;
    @Input() admissionId?: string;

    subscription : Subscription = new Subscription();
    
    pagination: GMHISPagination = {};

    sizes = PAGINATION_SIZE;

    loading: boolean;

    searchForm: FormGroup;

    currentIndex: number;

    services: GMHISNameAndID[];

    docSrc: string;

    constructor(
      private evacuationService: GmhisEvacuationService,
      private notificationService: NotificationService,
      private modalService: NgbModal,
      private actCategorieService: ActCategoryService,
      private evacuationPDFService: GMHISEvacuationPDFService){}
   
    ngOnInit(): void {
        this.getServices();
        this.buildSearchFields();
        this.searhEvacuations();
        } 

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public onPrintRecordPDF(printRecordRef:any ): void {
      this.modalService.open(printRecordRef, { size: 'lg' });
      let doc  = this.evacuationPDFService.evatuationRecordPDF(this.evacuation);
      this.docSrc = doc.output('datauristring');       

    }

    public onSearchValueChange(): void {
      this.searhEvacuations();
    }

      public onUpdate(updateFormContent, evacuation: GMHISEvacuationPartial): void {
        this.evacuation = evacuation;
        
        this.modalService.open(updateFormContent, {size: 'lg'});
      }


      public onDeathSelected(recordRef: any,evacuation: GMHISEvacuationPartial) {
        this.evacuation = evacuation;
        this.modalService.open(recordRef, {size: 'lg'})
        }

      public onPageChange(event) {
        this.searchForm.get('page').setValue(event - 1);
        this.searhEvacuations();
      }
    
      public handleUpdateEvacuation(): void {
        this.modalService.dismissAll();
        this.searhEvacuations();
          this.notificationService.notify(NotificationType.SUCCESS, 'evcuation modifiée avec succès')
      }

      private getServices() {
        this.subscription.add(
          this.actCategorieService.findActiveActCategoryNameAndId().subscribe(
            (response: GMHISNameAndID[]) => {              
              this.services = response
            }
          )
        )
      }

      private buildSearchFields():void {
        this.searchForm = new FormGroup({
          service: new FormControl(null),
          page: new FormControl(0),
          size: new FormControl(25),
          sort: new FormControl('id,desc'),
        });
      }


      private searhEvacuations():void {
        this.loading = true;
        this.subscription.add(
          this.evacuationService.search(this.searchForm.value)
          .subscribe(
            (response: PageList) => {
              this.loading = false;
              GmhisUtils.pageListMap(this.pagination, response);
              
            },
            (errorResponse: HttpErrorResponse) => {
              this.loading = false;
              this.notificationService.notify(
                NotificationType.ERROR,
                errorResponse.error.message
              );
            }
          )
        );
      }
}