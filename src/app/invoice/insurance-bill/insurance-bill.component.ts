import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceService } from 'src/app/insurance/insurance.service';
import { PredefinedPeriod } from 'src/app/_common/domain/predefinedPeriod';
import { PredefinedPeriodService } from 'src/app/_common/services/predefined-period.service';
import { PageList } from 'src/app/_models/page-list.model';
import { PrintInsuranceInvoiceService } from 'src/app/_services/documents/print-insurance-invoice.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { SubSink } from 'subsink';
import { InsurancePrintDataFormat } from '../invoice';
import { InvoiceService } from '../service/invoice.service';

@Component({
  selector: 'app-insurance-bill',
  templateUrl: './insurance-bill.component.html',
  styleUrls: ['./insurance-bill.component.scss']
})
export class InsuranceBillComponent implements OnInit {

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

  insurance : any;
  public itemsFiltered = [];
  insurances: any[]=[];

  searchDateRange : string;

  predefined =  "PERIODE";
  dateOptions = [
    {id:PredefinedPeriod.TODAY, value:"Aujourd'hui"},
    {id:PredefinedPeriod.THIS_WEEK , value:"Semaine en cours"},
    {id:PredefinedPeriod.THIS_MONTH , value:"Mois en cours"},
    {id:PredefinedPeriod.THIS_YEAR , value:"Année en cours"},
  ]


  defaultSearchPeriode: object;

  dateStart = null;
  dateEnd = null;

 totalAmount : number = 0
 insuranceBalance: number = 0;
 facilityBalance: number = 0;

  constructor(
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private insuranceService : InsuranceService,
    private predefinedPeriodService: PredefinedPeriodService,
    private printInsuranceInvoiceService: PrintInsuranceInvoiceService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.initform();
    this.getInsuranceBill();
    this.getAllInsuranceActiveIdAndName();
  }

  public onInsuranceChange(insuranceID : any){
    this.insurance = this.insurances.find( insurance => insurance.id == insuranceID);
  }

  onGetetSelectedPeriode(period) {
    const resultat = this.dateOptions.find(dateOption => dateOption.id === period);
    this.predefined = resultat.value;
    this.defaultSearchPeriode = this.predefinedPeriodService.getSelectedPeriode(period);
    this.searchForm.get("date").setValue(this.defaultSearchPeriode);
    this.onFilter(this.defaultSearchPeriode);
  }

  printInsuranceList(printContent) : void {
    let practicianPrint : InsurancePrintDataFormat = {
      insuranceName: this.insurance ? this.insurance.name : "##",
      dateStart: this.dateStart ? this.dateStart : "##",
      dateEnd: this.dateEnd ? this.dateEnd : "##",
      totalBalance: this.totalAmount,
      InsuranceBalance: this.insuranceBalance,
      data: this.itemsFiltered
    }
      this.modalService.open(printContent, { size: 'xl' });
      let doc =this.printInsuranceInvoiceService.buildPrintList(practicianPrint,true)
      this.docSrc = doc.output('datauristring'); 
  }

  public onFilter(dateFilter? :any): void {
    let insuranceID = this.searchForm.get('insuranceID').value;
    let date = this.searchForm.get('date').value as Object;
    
    if (insuranceID !== null && date === null) this.filterItemsByInsurance(insuranceID);
    else if (insuranceID === null && date !== null) this.filterByDate(dateFilter); 
    else if (insuranceID !== null && date !== null) this.filterByInsuranceAndDate(insuranceID, dateFilter);

    this.calculTotalAmount();
  }

  private filterItemsByInsurance(insuranceID : number): void {
    this.onInsuranceChange(insuranceID)
    this.itemsFiltered = this.items.filter(item => item.insuranceID === insuranceID);
   }

   private filterByInsuranceAndDate(insuranceID: number, date: any): void {     
    this.formatDate(date);
    this.itemsFiltered = this.items.filter(item => (item.insuranceID === insuranceID) && new Date(item.billDate) >= new Date(this.dateStart) && new Date(item.billDate) <= new Date(this.dateEnd));
   }

  initform() {
    this.searchForm = new FormGroup({
      insuranceID: new FormControl(null),
      date : new FormControl(""),
      page: new FormControl(0),
      size: new FormControl(50),
      sort: new FormControl('id,desc'),
    });
  }

  onSearchValueChange(): void {
    this.getInsuranceBill();
  }

  public getInsuranceBill() {
    this.searchForm.get('insuranceID').setValue(null);
    this.searchForm.get("date").setValue(null);
    this.dateEnd = null;
    this.dateStart = null;
    this.insurance = null;
    this.showloading = true;
    this.subs.add(
      this.invoiceService.findAllInsuranceBil(this.searchForm.value).subscribe(
        (response: PageList) => {
          this.showloading = false;
          this.currentPage = response.currentPage + 1;
          this.empty = response.empty;
          this.firstPage = response.firstPage;
          this.items = response.items;  
          this.itemsFiltered = this.items;                                
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

  onIsActiveChange() {
    this.getInsuranceBill();
  }

  onPageChange(event) {
    this.searchForm.get('page').setValue(event - 1);
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

  private calculTotalAmount() {
    this.totalAmount = 0; 
    this.insuranceBalance = 0;
    this.itemsFiltered.forEach(element => {
      this.totalAmount += element.billTotalAmount;            
      this.insuranceBalance += element.insurancePart;
    }); 
    
    
  }
  private filterByDate(date: any): void {
    this.formatDate(date);
    this.itemsFiltered = this.items.filter(item => new Date(item.billDate) >= new Date(this.dateStart) && new Date(item.billDate) <= new Date(this.dateEnd)); 
    this.calculTotalAmount(); 
 }

  private formatDate(dateFilter: any): void {
    if (typeof (dateFilter) == "object") if (dateFilter.end) this.searchForm.get('date').setValue(dateFilter); 
    let date = this.searchForm.get('date').value;  
    this.dateStart = date.start.toISOString().split('T')[0];
    this.dateEnd = date.end.toISOString().split('T')[0];
 }
}
