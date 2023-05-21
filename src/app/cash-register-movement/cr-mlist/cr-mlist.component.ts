import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NotificationService,CashRegisterMovementService, UserService, CashRegisterActivityService } from 'src/app/_services';
import { ICashRegisterActivity, ICashRegisterMovement, User } from 'src/app/_models';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { PageList } from 'src/app/_models/page-list.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { CashRegisterService } from 'src/app/cash-register/cash-register.service';
import { PredefinedPeriodService } from 'src/app/_common/services/predefined-period.service';
import { PrintCashRegisterMovementService } from 'src/app/_services/documents/print-cash-register-movement.service';
import { PredefinedDate } from 'src/app/_common/domain/predefinedDate';

@Component({selector: 'app-cr-mlist',templateUrl: './cr-mlist.component.html'})
export class CrMListComponent implements OnInit {

  private subs = new SubSink();
  searchForm : FormGroup;
  public crMovement : ICashRegisterMovement;
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

 
  /* A variable that is used to show a loader when the data is being fetched from the server. */
  showLoader : boolean = false;
  currentIndex: number;
  cashRegistersNameAndId: any;
  cashiers: any;
  crActivity : ICashRegisterActivity;
  cashRegisterBalance : number = 0;
  realClosingBalance : number = 0;
  docSrc: any;

  predefined =  "PERIODE";
  dateOptions = [
    {id:PredefinedDate.TODAY, value:"Aujourd'hui"},
    {id:PredefinedDate.THIS_WEEK , value:"Semaine en cours"},
    {id:PredefinedDate.THIS_MONTH , value:"Mois en cours"},
    {id:PredefinedDate.THIS_YEAR , value:"Année en cours"},
  ]
  defaultSearchPeriode: object;

  constructor(
    private crMovementService : CashRegisterMovementService,
    private notificationService: NotificationService,
    private cashRegisterService : CashRegisterService,
    private userService : UserService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private crActivityService : CashRegisterActivityService,
    private predefinedPeriodService: PredefinedPeriodService,
    private printCashRegisterMovementService : PrintCashRegisterMovementService
  ) { }

  ngOnInit(): void {   
    this.user = this.userService.getUserFromLocalCache();    
   this.initSearchForm();
   this.getCrMovement();
   this.findActiveCashRegisterNameAndId();
   this.getCrActivityByCahier(this.user.id);
  }


  printInsuranceList(printContent) : void {
    this.getCrMovement();
    this.modalService.open(printContent, { size: 'xl' });
    let doc =this.printCashRegisterMovementService.buildCashRegisterMovPrintList(this.items)
    this.docSrc = doc.output('datauristring'); 
  
}



  initSearchForm(){
    this.searchForm = new FormGroup({
      prestationNumber : new FormControl(''),
      cashRegister: new FormControl(' '),
      user: new FormControl(this.user.id),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    })
  }


  public getCrMovement(){
    this.showLoader = true;
    this.subs.add(
      this.crMovementService.getPaginatedListOfCrMovement(this.searchForm.value).subscribe(
        (response: PageList) => {
          console.log(response);
          this.showLoader = false;
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
          this.showLoader = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          );
        }
      )
    )
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getCrMovement();
  }

  openAddForm(addFormContent) {
    this.modalService.open(addFormContent, { size: 'lg' });
  }

  openUpdateForm(updateFormContent, item?) {
    this.crActivity = item;
    console.log(this.crActivity);
    
    this.modalService.open(updateFormContent, { size: 'lg' });
  }

  addCrActivity() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Acitivité de caisse ajoutée avec succès'
    );
    this.getCrMovement();
  }

  updateCrActivity() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'Acitivité de caisse modifiée avec succès'
    );
    this.getCrMovement();
  }

  rowSelected(crMovement: ICashRegisterMovement, index: number) {
    this.currentIndex = index;
    this.crMovement = crMovement;
  }


  private findActiveCashRegisterNameAndId(){
    this.cashRegisterService.findCashRegisternameAndIdList().subscribe(
      (response : any) => {
        this.cashRegistersNameAndId = response;        
      },
      (errorResponse : HttpErrorResponse) => {
        this.showLoader = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }



 getCrActivityByCahier(cashier : number){
      this.crActivityService.getCrActivityByCahier(cashier).subscribe(
        (response : ICashRegisterActivity) => {
          this.crActivity = response;
          console.log(this.crActivity.closingBalance);
          
          this.cashRegisterBalance = this.crActivity.cashRegisterBalance;
          console.log(this.crActivity);
        },
        (errorResponse : HttpErrorResponse) => {
          this.showLoader = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          ); 
        }
      )
 }

  closeCashRegister(){
    this.crActivity.realClosingBalance = this.realClosingBalance;
    this.crActivityService.updateCrActivity(this.crActivity).subscribe(
      (response : ICashRegisterActivity ) => {
        console.log(response);
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'Caisse fermée avec succès'
        );
      },
      (errorResponse : HttpErrorResponse) => {
        this.showLoader = false;
        this.notificationService.notify(
          NotificationType.ERROR,
          errorResponse.error.message
        ); 
      }
    )
  }

}
