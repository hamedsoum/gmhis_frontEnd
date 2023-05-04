import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientPrescriptionService } from 'src/app/_services/patient-prescription.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.css']
})
export class ListPrescriptionComponent implements OnInit {

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
   * collection of prescription
   */
  public prescriptions: object;

  public prescription: object;

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
  * define if request result has datas or no
  */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  states = [
    { id: "N", value: "Non traiter" },
    { id: "Y", value: "traiter" },
  ];

  drugs: object;

  drugServed = [];

  drugServedIds = [];

  patient : object;

  patientTag : any;

  /**
  * pdf src for ngx-extended-pdf-viewer
  */
  docSrc: any;

  constructor(
    private patientPrescriptionService: PatientPrescriptionService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getprescriptions();
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
      state: new FormControl('N')
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    })
  }

  /**
   * get request list
   */
  getprescriptions() {
    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.order = this.order;
    data.sort = this.sort;

    this.patientPrescriptionService.findAllPage(data).subscribe(
      res => {
        if (res) {
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.prescriptions = res['content'];
          
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.prescriptions = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      });

  }

  /**
  * search function
  */
  search() {
    this.loading = true;
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.getprescriptions();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getprescriptions();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getprescriptions();
  }

  setSelectedItem(item) {
    this.prescription = item;
    this.drugs = JSON.parse(item.drugs);
    if(item.drugServed != null) {
      this.drugServed =  JSON.parse(item.drugServed);
      this.drugServedIds = this.drugServed.map(({ id }) => id);
    }
  }

  processingPrescription(drug) {

    if (this.drugServed.includes(drug)) {
      let index = this.drugServed.indexOf(drug);
      this.drugServed.splice(index, 1);
    } else {
      this.drugServed.push(drug);
    }
    
  }

  save() {

    this.alertService.clear();
    
    if(this.prescription["collected"] == 'N') {

       this.prescription['drugServed'] = this.drugServed.length != 0? JSON.stringify(this.drugServed) : null; 
       this.patientPrescriptionService.update(this.prescription).subscribe(res => {
      //      if(res) {
      this.alertService.success("Ordonance servi avec succèss")
      //      }
      //      this.page = this.page - 1;
      //      this.getAnalysisRequests();
    });
  } else {
    this.alertService.error("Impossible de modifier car la facture de l'ordonance à dejà été encaiser" );
  }
}

 /**
  * generate precription document
  */
  generatePrescription(prescription) {
    
    this.prescription = prescription;

    this.patient = prescription['patient'];

    setTimeout(function(patientPrescriptionService){
       this.patientTag = document.getElementsByClassName('barcode')[0].firstChild;
       let doc = patientPrescriptionService.generatePdf(prescription, this.patientTag);
       this.docSrc = doc.output('datauristring');
    }, 3000);
    
    
   
      //this.patientTag = document.getElementsByClassName('barcode')[0].firstChild;
      

     
    
  }
  
}
