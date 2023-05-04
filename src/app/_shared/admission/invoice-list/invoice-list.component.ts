import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateAdapter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { AdmissionInvoice} from "./../../../_models/admissionInvoice.model";
import { AdmissionInvoiceService } from "./../../../_services/admission-invoice.service";
import { deleteRow } from 'src/app/_utility/delete-row';
import { InsuranceService } from "./../../../_services/insurance.service";
import { InsuranceSubscriberService } from "./../../../_services/insurance-subscriber.service";
import { ActService } from 'src/app/_services/act.service';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class InvoiceListComponent implements OnInit {

  /**
     * search formGroup
     */
    public form: FormGroup;

    /**
     * entries formGroup
     */
    public entryForm: FormGroup;
  
    /**
     * init first page
     */
    public page = 0;
  
    /**
     * number of item par page default 10
     */
    public perPage = 10;
  
    /**
     * total items
     */
    public totalItem: number;
  
    /**
     * number of page
     */
    public pages: number;
  
    /**
     * handle the spinner
     */
    public loading = true;
  
    /**
     * the selected item a action
     */
    public selectedItem: number;
  
    /**
     * collection of admissions invoices
     */
    invoices: AdmissionInvoice[];

    invoice : object;

    patient: object;

    /**
    * pdf src for ngx-extended-pdf-viewer
    */
    docSrc: any;
  
    /**
     * Define entries options
     */
    entries = [
      { id: 10, value: 10 },
      { id: 25, value: 25 },
      { id: 50, value: 50 },
      { id: 100, value: 100 }
    ];
  
    /**
     * Define insurance options
     */
    insurances: object;
  
    /**
     * Define insurance subscriber options
     */
    insuranceSubscribers: object;

    /**
     * Define patient type options
     */
    patientTypes =  [
      {id: 'a' , value: 'Assuré'},
      {id: 'c' , value: 'Comptant'},
    ]
  
    /**
     * Define acts options
     */
    acts: object;
  
    /**
     *  order direction
     */
    order = 'desc';
  
    /**
     * order column default id
     */
    sort = 'id';
  
    /**
    * admissions filter
    */
    invoiceStatus = 'R';

    /**
     * bill collected state
     */
    isCollected = false;
  
    /**
     * description of the order direction
     */
    orderDescription = 'decroissant';

  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

   /**
    * Msg to display when request result is empty
    */
   EmptyMessage: String;
  
  
    hoveredDate: NgbDate | null = null;
  
    /**
     * date range start
     */
    fromDate: NgbDate | null;
  
    /**
     * date range end
     */
    toDate: NgbDate | null;
    

    
  constructor(   
    private admissionInvoiceService: AdmissionInvoiceService,
    private insuranceService: InsuranceService,
    private insuranceSubscriberService : InsuranceSubscriberService,
    private actService: ActService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private patientService : PatientService
  ) {
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.initForm();
    this.actService.getIdAndName().subscribe(res=>{this.acts=res});
    this.insuranceService.findAll().subscribe(res=>{this.insurances=res});
    this.insuranceSubscriberService.findAll().subscribe(res=>{this.insuranceSubscribers=res});

    this.getInvoices();    
  }

  
  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      billNumber: new FormControl(''),
      admissionNumber: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      cnamNumber: new FormControl(''),
      idCardNumber: new FormControl(''),
      subscriber: new FormControl(null),
      insurance: new FormControl(null),
      convention: new FormControl(null),
      patientType: new FormControl(null),
      act: new FormControl(null),
      dpFromDate: new FormControl(null),
      dpToDate: new FormControl(null),
     
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get admission list
   */
  getInvoices() {
    let data = this.form.value
    data.size = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;
    data.invoiceStatus = this.invoiceStatus;

    data.fromDate = this.formatter.format(this.fromDate);
    data.toDate = this.formatter.format(this.toDate);

    this.admissionInvoiceService.findAll(data).subscribe(
      res => {
        if (res) {
          console.log(res['content']);
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.invoices = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.invoices = [];
            this.loading=false;
            this.hasNoData=true;
            this.EmptyMessage=error;
      })
  }

  /**
   * search function
   */
  search() {
    this.loading = true;
    this.page =this.page > 0 ? this.page - 1: 0;
    this.getInvoices();
  }

  /**
   * sort function
   * @param SortColumn 
   */
  onSort(SortColumn) {
    this.loading= true;
    if (this.order == 'desc') {
      this.order = 'asc';
      this.orderDescription = 'decroissant';
    } else {
      this.orderDescription = 'croissant';
      this.order = 'desc';
    }
    this.orderDescription;
    this.sort = SortColumn;
    this.loading = true
    this.page = this.page - 1;
    this.getInvoices();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getInvoices();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getInvoices();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {   
    this.invoice = item;
    this.selectedItem = item.id;
    this.isCollected =  (item.billStatus == 'C' ) ? true : false;
  }


  /**
   * set the liste invoiceStatus option
   */
  setInvoiceStatus(option) {
    this.invoiceStatus = option;
  }

/**
 * 
 */
   deleteItem() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Supprimer cette facture?',
      text: 'Cette action est est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {
        this.admissionInvoiceService.delete(this.selectedItem).subscribe(
          result => {  },
          error => {
            if (error == "OK") {
              deleteRow(this.invoices, this.selectedItem);
              Swal.fire(
                'Supprimé!',
                "Facture  avec succès!",
                'success'
              )
            } else {
              Swal.fire(
                'Erreur',
                error,
                'error'
              )
            }
        });
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'Element encore en base.',
          'error'
        )
      }
    })
  }

  /**
  * pgenerate pdf in the ngx-pdf-extended-viewer
  */
  generateInvoicePdf(invoice) {    
    this.patientService.findById(1).subscribe(res => { this.patient = res;});

    console.log(this.patient);
    
  //  this.patient = invoice['patient'];  
  //  const patientTag = document.getElementsByClassName('barcode')[0].firstChild;
  //  console.log(patientTag);
   
   const patientTag ='null'
    let doc = this.admissionInvoiceService.generatePdf(invoice, patientTag);
    this.docSrc = doc.output('datauristring');
  }


  /**
   * **********************************************************************************************************************
   * 
   * date range functions
   * 
   * **********************************************************************************************************************
   */

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
