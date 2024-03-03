import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NotificationService,CashRegisterMovementService, UserService, CashRegisterActivityService } from 'src/app/_services';
import { CashRegisterActivity, ICashRegisterMovement, User } from 'src/app/_models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { PageList } from 'src/app/_models/page-list.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { CashRegisterService } from 'src/app/cash-register/cash-register.service';
import { PrintCashRegisterMovementService } from 'src/app/_services/documents/print-cash-register-movement.service';
import { PredefinedPeriod } from 'src/app/_common/domain/predefinedPeriod';
import { GMHISROLES } from 'src/app/role/domain';

@Component({selector: 'gmhis-cash-register-movement-list',templateUrl: './gmhis-cash-register-movement-list.component.html'})
export class GMHISCashRegisterMovementListComponent implements OnInit {

  private subs = new SubSink();

  searchFieldsGroup : FormGroup;

  public cashRegisterMovement : ICashRegisterMovement;

  currentPage: number;

  empty: boolean;

  firstPage: boolean;

  lastPage: boolean;

  totalItems: number;

  totalPages: number;

  public items: any;

  selectedSize: number;

  user : User;

  sizes = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 }
  ];

 
  loading : boolean = false;

  currentIndex: number;

  cashRegistersNameAndId: any;
  
  cashiers: any;

  crActivity : CashRegisterActivity;

  cashRegisterBalance : number = 0;

  realClosingBalance : number = 0;

  docSrc: any;

  predefined =  "PERIODE";

  dateOptions = [
    {id:PredefinedPeriod.TODAY, value:"Aujourd'hui"},
    {id:PredefinedPeriod.THIS_WEEK , value:"Semaine en cours"},
    {id:PredefinedPeriod.THIS_MONTH , value:"Mois en cours"},
    {id:PredefinedPeriod.THIS_YEAR , value:"Année en cours"},
  ]
  defaultSearchPeriode: object;

  cashRegisterClosed: boolean;

  constructor(
    private crMovementService : CashRegisterMovementService,
    private notificationService: NotificationService,
    private cashRegisterService : CashRegisterService,
    private userService : UserService,
    private modalService: NgbModal,
    private crActivityService : CashRegisterActivityService,
    private printCashRegisterMovementService : PrintCashRegisterMovementService
  ) { }

  ngOnInit(): void {   
    this.user = this.userService.getUserFromLocalCache();    
   this.initSearchForm();
   this.getCrMovement();
   this.findActiveCashRegisterNameAndId();

   console.log(this.cashRegisterClosed);
   
  }


  public printInsuranceList(printContent) : void {
    this.getCrMovement();
    this.modalService.open(printContent, { size: 'xl' });
    let doc =this.printCashRegisterMovementService.buildCashRegisterMovPrintList(this.items)
    this.docSrc = doc.output('datauristring'); 
  
}


private initSearchForm(){
    this.searchFieldsGroup = new FormGroup({
      prestationNumber : new FormControl(''),
      cashRegister: new FormControl(' '),
      user: new FormControl(this.user.id),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    })
  }

  public isAdmin(): boolean {
     return this.user.role === GMHISROLES.SUPER_ADMIN;
  }

  public getCrMovement(){
    this.loading = true;
    if(!this.isAdmin()) this.getCrActivityByCahier(this.user.id);

    this.subs.add(
      this.crMovementService.getPaginatedListOfCrMovement(this.searchFieldsGroup.value).subscribe(
        (response: PageList) => {
          this.loading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items;
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
        },
        (errorResponse: HttpErrorResponse) => {
          this.loading = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          );
        }
      )
    )
  }

  public onPageChange(event) {
    this.searchFieldsGroup.get('page').setValue(event - 1);
    this.getCrMovement();
  }

  public openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'lg' });
  }

 public openUpdateForm(updateFormContent, item?) {
    this.crActivity = item;    
    this.modalService.open(updateFormContent, { size: 'lg' });
  }

  addCrActivity() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Acitivité de caisse ajoutée avec succès');
    this.getCrMovement();
  }

  updateCrActivity() {
    this.modalService.dismissAll();
    this.notificationService.notify(NotificationType.SUCCESS,'Acitivité de caisse modifiée avec succès');
    this.getCrMovement();
  }

  rowSelected(crMovement: ICashRegisterMovement, index: number) {
    this.currentIndex = index;
    this.cashRegisterMovement = crMovement;
  }

  private findActiveCashRegisterNameAndId(){
    this.cashRegisterService.findCashRegisternameAndIdList().subscribe(
      (response : any) => {this.cashRegistersNameAndId = response;},
      (errorResponse : HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }

 getCrActivityByCahier(cashier : number){
      this.crActivityService.getCashRegisterActivityByCahier(cashier).subscribe(
        (response : CashRegisterActivity) => {
          this.cashRegisterClosed = response.state;
          console.log(this.cashRegisterClosed);
          this.crActivity = response; 
          if(this.crActivity.state) this.cashRegisterBalance = this.crActivity.cashRegisterBalance;
        },
        (errorResponse : HttpErrorResponse) => {
          this.loading = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          ); 
        }
      )
 }

  closeCashRegister(){
    this.crActivity.realClosingBalance = this.realClosingBalance;
    if(!this.crActivity.state) {
      this.notificationService.notify(NotificationType.ERROR,'Caisse dèja fermé');
      return
    } 
    this.crActivityService.updateCrActivity(this.crActivity).subscribe(
      (response : CashRegisterActivity ) => {
        this.notificationService.notify(NotificationType.SUCCESS,'Caisse fermée avec succès');
        this.cashRegisterBalance = 0;
        this.realClosingBalance = 0;
        this.getCrActivityByCahier(this.user.id);
      },
      (errorResponse : HttpErrorResponse) => {
        this.loading = false;
        this.notificationService.notify( NotificationType.ERROR,errorResponse.error.message); 
      }
    )
  }

}
