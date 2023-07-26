import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs/operators';
import { PageList } from 'src/app/_models/page-list.model';
import { NotificationService } from 'src/app/_services';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { Cashier } from '../api/domain/cashier';
import { CashierService } from '../api/service/cashier.service';

@Component({
  selector: 'cashier-list',
  templateUrl: './cashier-list.component.html',
})
export class CashierListComponent implements OnInit {

readonly TITLE = 'Caissiers';
readonly NEW_CASHIER = 'Creer un nouveau Caissier';

private subs = new SubSink();


public searchForm: FormGroup;

public cashier : Cashier;

currentPage: number;
empty: boolean;
firstPage: boolean;
lastPage: boolean;
totalItems: number;
totalPages: number;

public items: any;

selectedSize: number;

sizes = [
  { id: 10, value: 10 },
  { id: 25, value: 25 },
  { id: 50, value: 50 },
  { id: 100, value: 100 },
  { id: 250, value: 250 },
  { id: 500, value: 500 },
  { id: 1000, value: 1000 },
];

actives = [
  { id: true, value: 'Actif' },
  { id: false, value: 'Inactif' },
];

loading: boolean = false;
currentIndex: number;

  constructor(
    private cashierService: CashierService,
    private notificationService: NotificationService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.buildField();
    this.searchCashier()
  }

  public onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.searchCashier();
  }

  

  public onSearchValueChange(): void {
    this.searchCashier();
  }

  buildField(): void {
    this.searchForm = new FormGroup({
      active: new FormControl(false),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    })
  }

  private searchCashier(): void {
    this.loading = true;
    this.subs.add(
      this.cashierService.searchCashiers(this.searchForm.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (response: PageList) => {
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items; 
          console.log(this.items);
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
        },
        (errorResponse: HttpErrorResponse) => {         
        }
      )
    )
  }

  
  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'md' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.cashier = item;
    this.modalService.open(updateFormContent, { size: 'md' });
  }

  cashierSaved(): void{
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Caissier(e) ajouté avec succès');
    this.searchCashier();
  }

  cashierUpdated() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Caissier(e) modifié avec succès');
    this.searchCashier();
  }

}


