import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { th } from "date-fns/locale";
import { Subscription } from "rxjs";
import { ActCategoryService } from "src/app/act/category/service/act-category.service";
import { PAGINATION_SIZE } from "src/app/shared/constant";
import { GMHISPagination } from "src/app/shared/models/gmhis-domain";
import { GMHISNameAndID } from "src/app/shared/models/name-and-id";
import { PageList } from "src/app/_models/page-list.model";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISEvacuationPartial } from "../api/domain/evacuation.domain";
import { GmhisEvacuationService } from "../api/service/gmhis.evacuation.service";



@Component({ selector: 'gmhis-evacuations', templateUrl: './gmhis-evacuations.component.html'})
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

    constructor(
      private evacuationService: GmhisEvacuationService,
      private notificationService: NotificationService,
      private modalService: NgbModal,
      private actCategorieService: ActCategoryService){}
   
    ngOnInit(): void {
        this.getServices();
        this.buildSearchFields();
        this.findEvacuations();
        } 

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public onSearchValueChange(): void {
      this.findEvacuations();
    }

  
      public findEvacuations():void {
        this.loading = true;
        this.subscription.add(
          this.evacuationService.search(this.searchForm.value)
          .subscribe(
            (response: PageList) => {
              this.loading = false;
              this.pagination.currentPage = response.currentPage + 1;
              this.pagination.empty = response.empty;
              this.pagination.firstPage = response.firstPage;
              this.pagination.items = response.items;                                            
              this.pagination.lastPage = response.lastPage;
              this.pagination.selectedSize = response.size;
              this.pagination.totalItems = response.totalItems;
              this.pagination.totalPages = response.totalPages;
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

      public onUpdate(updateFormContent, evacuation: GMHISEvacuationPartial): void {
        this.evacuation = evacuation;
        console.log(this.evacuation);
        
        this.modalService.open(updateFormContent, {size: 'lg'});
      }


      public rowSelected(evacuation: GMHISEvacuationPartial, index: number) {
            this.currentIndex = index;
            this.evacuation = evacuation;
        }

      public onPageChange(event) {
        this.searchForm.get('page').setValue(event - 1);
        this.findEvacuations();
      }

      private buildSearchFields():void {
        this.searchForm = new FormGroup({
          service: new FormControl(null),
          page: new FormControl(0),
          size: new FormControl(25),
          sort: new FormControl('id,desc'),
        });
      }

      private getServices() {
        this.subscription.add(
          this.actCategorieService.findActiveActCategoryNameAndId().subscribe(
            (response: GMHISNameAndID[]) => {
              console.log(response);
              
              this.services = response
            }
          )
        )
        
      }

      public handleUpdateEvacuation(): void {
        this.modalService.dismissAll();
        this.findEvacuations();
          this.notificationService.notify(NotificationType.SUCCESS, 'evcuation modifiée avec succès')
      }
}