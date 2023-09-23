import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { PAGINATION_DEFAULT_SIZE, PAGINATION_SIZE } from "src/app/shared/constant";
import { GMHISPagination } from "src/app/shared/models/gmhis-domain";
import { PageList } from "src/app/_models/page-list.model";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { GMHISDeathPartial } from "../api/domain/gmhis.death.domain";
import { GmhisDeathService } from "../api/service/gmhis.death.service";

@Component({selector: 'gmhis-deaths', templateUrl: './gmhis-death-listing.component.html'})
export class GMHISDeathListing implements OnInit, OnDestroy {
    
readonly TITLE = 'Décès';
readonly NEW_CASHIER = 'Déclarer un nouveau Décés';

subscription: Subscription = new Subscription()

public searchFieldsForm: FormGroup;

public death : GMHISDeathPartial;

pagination: GMHISPagination = {};

sizes = PAGINATION_SIZE;

loading: boolean;

currentIndex: number;
  constructor(
    private deathService: GmhisDeathService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.buildFields();
    this.search()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onDeathSelected(recordRef, death : GMHISDeathPartial): void {
    this.death = death;
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
      this.deathService.search(this.searchFieldsForm.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (response: PageList) => {
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
        }
      )
    )
  }

  public onOpenCreateForm(deathFormRef):void {
    this.modalService.open(deathFormRef, { size: 'md' });
  }

  public onOpenUpdateForm(deathFormRef, item?):void {
    this.death = item;
    this.modalService.open(deathFormRef, { size: 'md' });
  }

  public handeDeathSaveEvent(): void{
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Décès declaré avec succès');
    this.search();
  }

  public handeDeathUpdateEvent():void {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Décès modifié avec succès');
    this.search();
  }
    
}