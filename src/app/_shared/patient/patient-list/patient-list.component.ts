import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/_services/patient.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @ViewChild('htmlData') htmlData:ElementRef;

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
   * 
   */
  @Input()
  component: string;

  /**
   * 
   */
   listPatientComponent: boolean;

   /**
    * 
    */
  schedulerComponent: boolean;

  /**
   * the selected item a action
   */
  public selectedItem: number;

  public patient: object;
  /**
   * collection of patients
   */
  public patients: object;

  /**
   * Define entries options
   */
  entries = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 }
  ]

  /**
   *  order direction
   */
  order = 'desc';

  /**
   * order column default id
   */
  sort = 'id';

  /**
   * description of the order direction
   */
  orderDescription = 'decroissant';

  /**
   * barcode
   */
  barCode:string;

   /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

   /**
    * Msg to display when request result is empty
    */
   EmptyMessage: String;

  /**
   * define Appointment act options
   */
  appointmentActs = [
    { id: 1, name:"1ere consultation" },
    { id: 2, name:"Consultation de surveillance" },
    { id: 3, name:"Annalyse" },
    { id: 4, name:"Examens" },
    { id: 4, name:"Autres" }
  ];


/**
 * pdf src for ngx-extended-pdf-viewer
 */
  docSrc: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.initForm();
    this.listPatientComponent = (this.component=='ListPatientComponent') ? true : false; 
    this.schedulerComponent = (this.component=='SchedulerComponent') ? true : false;
    this.getPatients();
  }


  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      patientExternalId: new FormControl(''),
      cellPhone: new FormControl(''),
      cnamNumber: new FormControl(''),
      idCardNumber: new FormControl(''),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get patient list
   */
  getPatients() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.patientService.findAll(data).subscribe(
      res => {
        console.log(res);
        
        if (res) {
          console.log(res['content'])
          this.loading = false;
          this.hasNoData=false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patients = res['content']; 
          this.page = res['pageNumber'] + 1;
        };
      },
      error =>{
            this.patients = [];
            this.loading=false;
            this.hasNoData=true;
            this.EmptyMessage=error;
      });
   
  }

   /**
   * search function
   */
  search() {
    this.loading = true;
    this.page =this.page > 0 ? this.page - 1: 0;
    this.getPatients();
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
    this.getPatients();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getPatients();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getPatients();
  }

  /**
   * set the selected item value
   * @param value 
   */
  onItemChange(item) {
    this.selectedItem = item.id;
    this.patient = item;    
  }


  /**
 *  print the barcode in a jspdf doc 
 */
public generateBarCode():void {
  
  const img = document.getElementsByClassName('barcode')[0].firstChild;
  var doc = new jsPDF('p', 'px', 'a5');;
  doc.setFontSize(10);
  
  //document  left column
  for (let index = 0; index < 10; index++) {
    doc.addImage(img['src'], 'JPEG', 15 , 30 + index * 30, 130, 30);
    doc.text('PT0000012100026', 45 , 60 + index * 30);
  }

  // document right column
  for (let index = 0; index < 10; index++) {
    doc.addImage(img['src'], 'JPEG', 150 , 30 +index * 30, 130, 30); 
    doc.text('PT0000012100026', 180 , 60 + index * 30)
  }

  this.docSrc = doc.output('datauristring');
}

appointment(){
  
}


}
