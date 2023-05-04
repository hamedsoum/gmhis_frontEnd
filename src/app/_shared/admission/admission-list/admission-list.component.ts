import { Component, Input, OnInit } from '@angular/core';
import { Admission } from 'src/app/_models/admission.model';
import { AdmissionService } from "./../../../_services/admission.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { deleteRow } from "./../../../_utility/delete-row";
import { FormControl, FormGroup } from '@angular/forms';
import { medicalServiceService } from "./../../../_services/medicalService.service";
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDateAdapter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { Patient } from 'src/app/_models/patient.model';
import { PracticianService } from 'src/app/_services/practician.service';
import { environment } from 'src/environments/environment';
import { ActService } from 'src/app/_services/act.service';
import { AdmissionInvoiceService } from 'src/app/_services/admission-invoice.service';
import jsPDF from 'jspdf';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class AdmissionListComponent implements OnInit {

  /**
     * search formGroup
     */
  public form: FormGroup;

  public waitingRoomForm : FormGroup;

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
  public selectedItem: object;

  /**
   * the selected item id
   */
  public selectedItemId: number;

  /**
   * selected admission patient id
   */
  patientId: number;


  /**
   * collection of admissions
   */
  admissions: object;


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
   * Define practicians options
   */
  practicians: object;

  /**
   * Define services options
   */
  services: object;

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
  * admissions admissionStatus
  */
  admissionStatus = 'R';

/**
 * get admission billed state
 */
  isBilled = false ;

  /**
   * description of the order direction
   */
  orderDescription = 'decroissant';

  hoveredDate: NgbDate | null = null;

  /**
   * date range start
   */
  fromDate: NgbDate | null;

  /**
   * date range end
   */
  toDate: NgbDate | null;
  /**
  * 
  */
  @Input()
  component: string;

  /**
   * 
   */
  @Input()
  title: string;

  /**
   * 
   */
  waitingRoom: boolean;

  /**
   * 
   */
  nonBilledAdmission: boolean;


  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  /**
   * colletion of bills
   */
  invoices : any;

  /**
   * set waiting rooms options
   */
  waitingRooms : any;

  constructor(
    private admissionService: AdmissionService,
    private practicianService: PracticianService,
    private medicalServices: medicalServiceService,
    private actService: ActService,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private invoiceService :  AdmissionInvoiceService,
    private wrService : WaitingRoomService
  ) {}

  ngOnInit() {

    this.initForm();
    this.practicianService.getIdAndName().subscribe(res => {  this.practicians = res;  });
    this.medicalServices.getIdAndName().subscribe(res => { this.services = res; });
    this.actService.getIdAndName().subscribe(res => { this.acts = res });
    this.wrService.getIdAndName().subscribe(res => { this.waitingRooms = res;});

    if (this.component == "PatientInWaintingRoomComponent") {
      this.waitingRoom = true;
      this.order = 'asc';
    } else {
      this.nonBilledAdmission = true;
    }

    this.getAdmissions();
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      admissionNumber: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      cnamNumber: new FormControl(''),
      idCardNumber: new FormControl(''),
      practician: new FormControl(null),
      service: new FormControl(null),
      act: new FormControl(null),
      dpFromDate: new FormControl(null),
      dpToDate: new FormControl(null),
      
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })

    this.waitingRoomForm = new FormGroup({
      waitingRoom: new FormControl(null),
    })
  }

  /**
   * get admission list
   */
  getAdmissions() {

    if (this.component == "PatientInWaintingRoomComponent") {
       this.getAdmmissionQueue(this.getRequestParams());
    } else {
      this.getAllAdmission(this.getRequestParams());
    }
   
  }
getRequestParams(){
  let data = this.form.value
    data.size = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;
    data.fromDate = this.formatter.format(this.fromDate);
    data.toDate = this.formatter.format(this.toDate);
    data.admissionStatus = this.admissionStatus;
    data.waitingRoom = this.waitingRoomForm.get('waitingRoom').value;
  return data;
}
  getAllAdmission(data : Object){
    this.admissionService.findAll(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.admissions = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.admissions = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }

  getAdmmissionQueue(data : Object){
    this.admissionService.findAdmissionQueue(data).subscribe(
      res => {
        if (res) {          
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.admissions = res['content'];
          this.page = res['pageNumber'] + 1;
          this.waitingRoomForm.get('waitingRoom').setValue(res['waitingRoom'])
        };
      },
      error => {
        this.admissions = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }

  onRoomChange(){
    this.getAdmmissionQueue(this.getRequestParams());
  }

  /**
    * search function
    */
  search() {
    this.loading = true;
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.getAdmissions();
  }

  /**
   * sort function
   * @param SortColumn 
   */
  onSort(SortColumn) {
    this.loading = true;
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
    this.getAdmissions();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getAdmissions();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getAdmissions();
  }

  /**
   * set the liste admissionStatus option
   */
  setAdmissionStatus(option) {
    this.admissionStatus = option;
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
    this.selectedItemId = item.id;
    this.patientId = item.patientId;
    this.isBilled = (item.admissionStatus == 'B') ? true : false;
  }

  deleteAdmission() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Supprimer cette admission?',
      text: 'Cette action est est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {
        this.admissionService.delete(this.selectedItemId).subscribe(
           res => {   },
            error => {
              if (error == "OK") {
                deleteRow(this.admissions, this.selectedItemId);
                Swal.fire(
                  'Supprimé!',
                  "Admission supprimée avec succès!",
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
          'Admission encore en base.',
          'error'
        )
      }
    })
  }

/**
 * pdf src for ngx-extended-pdf-viewer
 */
docSrc: any;
invoicePreview(){
  this.invoiceService.findNomCollectedBillByAdmission(this.selectedItemId).subscribe(res => {
     this.invoices = res;
     console.log(res);  
  })

}

generateInvoicePdf(){

      let doc = new jsPDF('p', 'pt', 'a4');

      let patientType = this.invoices[0].patientType == "a" ? "Patient assuré ": "Client comptant";

      let discount = this.invoices[0].discountInCfa ? this.invoices[0].discountInCfa : this.invoices[0].discountInPercentage ;

      let docHead = ' <table style="font-size: 14px"><tr><td><img src="'+ environment.logo +'" alt="Logo" width="100"></td>' +
        '<td class="text-bold text-nowrap"> Numero patient : ' + this.invoices[0].patientExternalId + '</td></tr></table>';

       let info = '<table class="ml-2 mt-5" style="width: 560px; font-size: 12px;"><tr><td class="text-nowrap"> <strong>Facture N°: </strong> ' +  this.invoices[0].billNumber + '</td>' +
          '<td  class="text-nowrap pl-5"> <strong>Date: </strong> ' + dateOutputFormat(this.invoices[0].billDate) + '</td>' +
          '</tr><tr><td  class="text-nowrap text-uppercase"> <strong>Patient:&nbsp; &nbsp;</strong>' + this.invoices[0].patientFirstName +"&nbsp;&nbsp;"+ this.invoices[0].patientMaidenName+"&nbsp;&nbsp;"+ this.invoices[0].patientLastName + '</td>' +
          '<td  class="text-nowrap pl-5"> <strong>contact: </strong>' +  this.invoices[0].patientContact + '</td>' +
          '</tr><tr><td  class="text-nowrap"> <strong>Type de client: </strong>' + patientType + '</td>' +
          '<td  class="text-nowrap pl-5"><strong>Etab.payeur '+ '' +' </strong></td></tr>' +
          '<tr><td class="text-nowrap"><strong>Matricule assuré: '+ '' +' </strong></td><td></td></tr></table>';

      let data = '<table class="table table-bordered mt-2 ml-2 table-sm" style="font-size: 12px; width:560px; border-bottom: none; border-left: none;"><thead class="text-center" style="background-color: #DCDCDC;">' +
          '<th>Date</th><th>Service</th><th>Medecin</th><th>Acte</th><th>Coût</th></thead>'+ 
          '<tbody>';
      this.invoices[0].acts.forEach(element => {
        let service = "";
         let row = '<tr><td>' + dateOutputFormat(this.invoices[0].billDate )+'</td><td class="text-capitalized">' +service+'</td>' +
         '<td class="text-capitalized">' + element.practicianFirstName +"&nbsp;&nbsp;"+ element.practicianLastName +'</td><td class="text-capitalized">' + element.name +'</td><td class="text-nowrap">' + element.actCost + ' fcfa</td></tr>';
      data = data + row;
        });    
      let emptyRow=  '<tr style="height:10rem"><td></td><td class="text-capitalized"></td>' +
        '<td class="text-capitalized"></td><td class="text-capitalized"></td><td class="text-nowrap"></td></tr>';
   
     let datafoot= emptyRow + '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Part&nbsp;PEC</td><td colspan="1">' + this.invoices[0].partTakenCareOf +' fcfa</td></tr>' +
          '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Part&nbsp;consommable</td><td colspan="1" class="text-danger text-bold">' + this.invoices[0].patientPart + ' fcfa</td>' + '</td></tr>' +
          '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Remise</td><td colspan="1">' + discount + '</td></tr>' +
          '<tr style="border-left: none;"><td colspan="3" style="border: none;"></td><td colspan="1">Total</td><td colspan="1" class="text-bold">' + this.invoices[0].totalAmount + ' fcfa </td></tr>' +
          '</tbody></table>';

     let docFoot = '<div style="width:540px; text-align:center; border-top:1px solid gray; padding-top:2px; font-size:10px; color:gray">' + environment.documentFooter + '</div>';

    //  let  invoiceInfo = '<div style="min-height: 750px;">' + docHead + info + data +'</div>' +docFoot;

     let  invoiceInfo = '<div style="min-height: 750px;">' + docHead + info +data+ datafoot +'</div>' +  docFoot;

      doc.html(invoiceInfo, {
        callback: function (doc) {
          doc.output('dataurlnewwindow');
        },
        x: 10,
        y: 10
      });



  //  var doc = new jsPDF();
  //   doc.html(data, {
  //     callback: function (doc) {
  //       doc.output('dataurlnewwindow');
  //     },
  //     x: 10,
  //     y: 10
  //   });
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
