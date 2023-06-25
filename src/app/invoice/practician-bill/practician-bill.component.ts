import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceService } from 'src/app/insurance/insurance.service';
import { PracticianService } from 'src/app/practician/practician.service';
import { PredefinedDate } from 'src/app/_common/domain/predefinedDate';
import { PredefinedPeriodService } from 'src/app/_common/services/predefined-period.service';
import { User } from 'src/app/_models';
import { PageList } from 'src/app/_models/page-list.model';
import { UserService } from 'src/app/_services';
import { PrintListService } from 'src/app/_services/documents/print-list.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-practician-bill',
  templateUrl: './practician-bill.component.html',
  styleUrls: ['./practician-bill.component.scss']
})
export class PracticianBillComponent implements OnInit {

  private subs = new SubSink();

  public searchForm: FormGroup;

  docSrc: any;

  public makeInvoice : boolean;

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

  showloading: boolean = false;
  currentIndex: number;

  acctionsList : boolean = false;
  actServicesNameAndId: any;
  activeActNameAndId: any;

  billStatus =  [
    {id: 'R' , value: 'Non Encaissé'},
    {id: 'C' , value: 'Encaissé'},
  ]
  acts: any;
  bill: any;
  insurances: any;

  searchDateRange : string;

  predefined =  "PERIODE";
  dateOptions = [
    {id:PredefinedDate.TODAY, value:"Aujourd'hui"},
    {id:PredefinedDate.THIS_WEEK , value:"Semaine en cours"},
    {id:PredefinedDate.THIS_MONTH , value:"Mois en cours"},
    {id:PredefinedDate.THIS_YEAR , value:"Année en cours"},
  ]
  defaultSearchPeriode: object;
  practicians: any;

  totalFacture : number = 0
  userId: number;

  constructor(
    private invoiceService: InvoiceService,private notificationService: NotificationService,config: NgbModalConfig,private modalService: NgbModal,
    private insuranceService : InsuranceService,private printListService : PrintListService,private predefinedPeriodService: PredefinedPeriodService,
    private practitianService : PracticianService, private userService : UserService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.userId = this.getUser().id == 0 ? null : this.getUser().id; 
    this.initform();
    this.getInsuranceBill();
    this.getAllInsuranceActiveIdAndName();
    this.findPracticians();
    console.log(this.userId);
    
  }

  private getUser(): User {
    return this.userService.getUserFromLocalCache();
  }
  getSelectedPeriode(period) {
    const resultat = this.dateOptions.find(dateOption => dateOption.id === period);
    this.predefined = resultat.value;
    this.defaultSearchPeriode = this.predefinedPeriodService.getSelectedPeriode(period);
    this.searchForm.get("date").setValue(this.defaultSearchPeriode);
    this.getInsuranceBill();
  }

  printInsuranceList(printContent) : void {
      this.modalService.open(printContent, { size: 'xl' });
      let doc =this.printListService.buildPrintList(this.items, true)
      this.docSrc = doc.output('datauristring'); 
  }

  initform() {
    this.searchForm = new FormGroup({
      billStatus: new FormControl("R"),
      userID: new FormControl(this.userId),
      date : new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(25),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getInsuranceBill();
  }

  onDateChange(range): void {
  }
  

  public getInsuranceBill() {
    let start = null;
    let end = null;
    let date = this.searchForm.get("date").value;
    if (typeof (date) == "object") {
      start = date.start.toISOString().split('T')[0];
      end = (!date.end) ? date.start.toISOString().split('T')[0] : date.end.toISOString().split('T')[0]
      this.searchDateRange = start + "," + end;
      this.searchForm.get("date").setValue(this.searchDateRange);
    }
    this.showloading = true;
    this.subs.add(
      this.invoiceService.facilityInvoicesPractician(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items; 
          this.totalFacture = 0; 
          this.items.forEach(element => {
            this.totalFacture += element.totalAmount;
          });                  
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
          if (typeof (date) == "object") {
            this.searchForm.get("date").setValue(date);
          }
        },
        (errorResponse: HttpErrorResponse) => {
          this.showloading = false;
          this.notificationService.notify(
            NotificationType.ERROR,
            errorResponse.error.message
          );
        }
      )
    );
  }

  onIsActiveChange() {
    this.getInsuranceBill();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getInsuranceBill();
  }

  

  updateAdmission() {
    this.modalService.dismissAll();
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'admission modifié avec succès'
    );
    this.getInsuranceBill();
  }

addInvoice(){
  this.modalService.dismissAll();
  this.notificationService.notify(
    NotificationType.SUCCESS,
    'facture crée avec succès'
  );
  this.getInsuranceBill();
}


addPayment(){
  this.modalService.dismissAll();
  this.notificationService.notify(
    NotificationType.SUCCESS,
    'facture encaissée avec succès'
  );
  this.getInsuranceBill();
}


  rowSelected(bill: any, index: number) {
    this.currentIndex = index;
    this.bill = bill;
  }

  showActionsList(){
    this.acctionsList = !this.acctionsList;
  }


  getAllInsuranceActiveIdAndName():void {
    this.subs.add(
      this.insuranceService.getAllInsuranceActive().subscribe(
        (response : any) => {
          this.insurances = response;          
        },
        (errorResponse : HttpErrorResponse) =>{
          this.notificationService.notify(NotificationType.ERROR, errorResponse.message);
        }
      )
    )
  }

private findPracticians(): void {
  this.subs.add(
    this.practitianService.findPracticianSimpleList().subscribe(
      (response : any) => {
        this.practicians = response;
        console.log(this.practicians);
        
      }
    )
  )
}
}
