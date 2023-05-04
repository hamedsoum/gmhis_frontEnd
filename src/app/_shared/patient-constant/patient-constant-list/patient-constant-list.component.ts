import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PatientConstantService } from 'src/app/_services/patient-constant.service';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { AlertService } from 'src/app/_utility/alert/alert.service';


@Component({
  selector: 'app-patient-constant-list',
  templateUrl: './patient-constant-list.component.html',
  styleUrls: ['./patient-constant-list.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider
})
export class PatientConstantListComponent implements OnInit {

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
   * object model
   */
  patientConstant: Object;

  /**
   * collection of object
   */
  patientConstants: Object;


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
  * define  states options
  */
  actives = [
    { id: "Y", value: "Actif" },
    { id: "N", value: "Inactif" },
  ]


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

  /**
  * page title
  */
  @Input()
  title: string;

  /**
   * parent component input
   */
  @Input()
  patientId: number;

  /** 
   * the curent component
  */
  @Input()
  component: string;

  /**
   * invalid from controls
   */
  invalidFormControls: any;

  listPatientConstantComponent : boolean;

  constructor(
    private patientConstantService: PatientConstantService,
    private alertService : AlertService) { }

  ngOnInit() {
    this.initForm();
    this.getPatientConstants();
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      date: new FormControl(''),
    })

    this.entryForm = new FormGroup({
      entries: new FormControl(10),
    });
    
    this.listPatientConstantComponent = (this.component == 'ListPatientConstantComponent') ? true : false;

  }

  /**
   * get patientConstants list
   */
  getPatientConstants() {

    let data = this.form.value
    data.entries = this.entryForm.get('entries').value;
    data.page = this.page;
    data.patientId = this.patientId;

    this.patientConstantService.findAllByPage(data).subscribe(
      res => {
        if (res) {

          res['content'].forEach(element => {
            map(element.values = JSON.parse(element.values))
          });

          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.patientConstants = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.patientConstants = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }


  /**
   * search function
   */
  search() {
    this.alertService.clear();
    this.invalidFormControls = invalidformControls(this.form);
    if(this.form.valid){
      this.loading = true;
      this.page = this.page > 0 ? this.page - 1 : 0;
      this.getPatientConstants();
    } else {
      this.alertService.error('Date invalide!');
    }
  }


  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getPatientConstants();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getPatientConstants();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }
}
