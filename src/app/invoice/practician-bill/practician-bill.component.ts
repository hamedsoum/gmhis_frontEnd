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
import { PracticianPrintDataFormat } from '../invoice';
import { InvoiceService } from '../service/invoice.service';

type billStatus = 'C' | 'R';

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
  public itemsFiltered = [];

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
  practicians: any[] = [];
  practician : any;
  userId: number;

  dateStart = null;
  dateEnd = null;

  totalAmount : number = 0
  facilityBalance: number = 0;
  practicianBalance: number = 0;
  patientBalance: number = 0;

  constructor(
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private insuranceService : InsuranceService,
    private printListService : PrintListService,
    private predefinedPeriodService: PredefinedPeriodService,
    private practitianService : PracticianService,
    private userService : UserService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.userId = this.getUser().id == 0 ? null : this.getUser().id;     
    this.buildField(); 
    this.getAllInsuranceActiveIdAndName();
    this.getInsuranceBill();
    this.findPracticians(); 
  }

  public onGetSelectedPeriode(period) {
    const resultat = this.dateOptions.find(dateOption => dateOption.id === period);
    this.predefined = resultat.value;
    this.defaultSearchPeriode = this.predefinedPeriodService.getSelectedPeriode(period);    
    this.searchForm.get("date").setValue(this.defaultSearchPeriode);
    this.onFilter(this.defaultSearchPeriode);
  }

  onPrintInsuranceList(printContent) : void {
    let practicianPrint : PracticianPrintDataFormat = {
      practicianName: this.practician ? this.practician.practicianName: "##",
      dateStart: this.dateStart ? this.dateStart : "##",
      dateEnd: this.dateEnd ? this.dateEnd : "##",
      totalBalance: this.totalAmount,
      facilityBalance: this.facilityBalance,
      practicianBalance: this.practicianBalance,
      data: this.itemsFiltered
    }
      this.modalService.open(printContent, { size: 'xl' });
      let doc =this.printListService.buildPrintList(practicianPrint,true)
      this.docSrc = doc.output('datauristring'); 
  }

  public onSearchValueChange(): void {
    this.getInsuranceBill();
  }

  public onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
    this.getInsuranceBill();
  }


  public rowSelected(bill: any, index: number) {
    this.currentIndex = index;
    this.bill = bill;
  }

  public onFilter(dateFilter? :any): void {
    let userID = this.searchForm.get('userID').value;
    let billStatus : billStatus = this.searchForm.get('billStatus').value;
    let date = this.searchForm.get('date').value as Object;
    console.log("userID: " + userID + " billStatus: " + billStatus + " date: " + date);
    
    if (userID !== null && billStatus === null && date === null) this.filterItemsByPractician(userID);
    else if (userID === null && billStatus !== null && date === null) this.filterItemsByStatus(billStatus);
    else if (userID === null && billStatus === null && date !== null) this.filterByDate(dateFilter); 
    else if (userID !== null && billStatus !== null && date === null) this.filterItemsByPracticianAndStatus(userID,billStatus );
    else if (userID !== null && billStatus === null && date !== null) this.filterByPracticianAndDate(userID,dateFilter);
    else if (userID === null && billStatus !== null && date !== null) this.filterByStatusAndDate(billStatus, dateFilter);
    else if (userID !== null && billStatus !== null && date !== null) this.filterByPracticianAndStatusAndDate(userID,billStatus,dateFilter);

    this.calculTotalAmount(); 
  }

  public getInsuranceBill() {    
    this.searchForm.get('billStatus').setValue(null);
    this.searchForm.get("date").setValue(null);
    this.dateEnd = null;
    this.dateStart = null;
    this.practician = null;
    this.showloading = true;    

    this.subs.add(
      this.invoiceService.facilityInvoicesPractician(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items;                               
          this.itemsFiltered = this.items;  
          if (this.userId !=null) {
            this.filterItemsByPractician(this.userId);                 
          }
          this.calculTotalAmount();                  
          this.lastPage = response.lastPage;
          this.selectedSize = response.size;
          this.totalItems = response.totalItems;
          this.totalPages = response.totalPages;
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
  
  private practicianChange(userId : number){
    this.practician = this.practicians.find( pr => pr.userId == userId);    
  }

  private getUser(): User {    
    return this.userService.getUserFromLocalCache();
  }

  private filterItemsByPractician(userID : number): void {
    console.log(this.items);
    
    this.practicianChange(userID)    
    this.itemsFiltered = this.items.filter(item => item.userID === userID);
    console.log(this.itemsFiltered);
    
   }

  private filterItemsByStatus(status : billStatus): void {
   this.itemsFiltered = this.items.filter(item => item.billStatus === status);
  }

   private filterItemsByPracticianAndStatus(userID : number, status : billStatus ): void {
    this.itemsFiltered = this.items.filter(item => item.userID === userID && item.billStatus === status);
   }

   private filterByDate(date: any): void {
      this.formatDate(date);
      this.itemsFiltered = this.items.filter(item => new Date(item.date) >= new Date(this.dateStart) && new Date(item.date) <= new Date(this.dateEnd)); 
   }

   private filterByPracticianAndDate(userID: number, date: any): void {     
    this.formatDate(date);
    this.itemsFiltered = this.items.filter(item => (item.userID === userID) && new Date(item.date) >= new Date(this.dateStart) && new Date(item.date) <= new Date(this.dateEnd));
   }

   private filterByStatusAndDate(status: billStatus, date: any): void {     
    this.formatDate(date);
    this.itemsFiltered = this.items.filter(item => (item.billStatus === status) && new Date(item.date) >= new Date(this.dateStart) && new Date(item.date) <= new Date(this.dateEnd));
   }

   private filterByPracticianAndStatusAndDate(userID: number , status: billStatus, date: any): void {     
    this.formatDate(date);
    this.itemsFiltered = this.items.filter(item => item.userID === userID && item.billStatus === status && new Date(item.date) >= new Date(this.dateStart) && new Date(item.date) <= new Date(this.dateEnd));
   }
o
   private formatDate(dateFilter: any): void {
    if (typeof (dateFilter) == "object") if (dateFilter.end) this.searchForm.get('date').setValue(dateFilter); 
    let date = this.searchForm.get('date').value;  
    this.dateStart = date.start.toISOString().split('T')[0];
    this.dateEnd = date.end.toISOString().split('T')[0];
 }

   private buildField() {
    this.searchForm = new FormGroup({
      billStatus: new FormControl(null),
      userID: new FormControl(null),
      date : new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(100),
      sort: new FormControl('id,desc'),
    });
  }
 
  private calculTotalAmount() {
    this.totalAmount = 0; 
    this.facilityBalance = 0;
    this.practicianBalance = 0;
    this.patientBalance = 0;
    this.itemsFiltered.forEach(element => {
      this.patientBalance += element.patientAmount;
      this.totalAmount += element.totalAmount;
      this.facilityBalance = this.practicianBalance = this.totalAmount/2;
    });
  }

  private getAllInsuranceActiveIdAndName():void {
    this.subs.add(
      this.insuranceService.getAllInsuranceActive().subscribe(
        (response : any) => { this.insurances = response; },
        (errorResponse : HttpErrorResponse) =>{ this.notificationService.notify(NotificationType.ERROR, errorResponse.message); }
      )
    )
  }

private findPracticians(): void {
  this.subs.add(
    this.practitianService.findPracticianSimpleList().subscribe(
      (response : any) => {
        this.practicians = response;          
        this.practicianChange(this.userId);    
      }
    )
  )
}
}
