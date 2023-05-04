import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConsultationService } from 'src/app/_services/consultation.service';
import { PathologyService } from 'src/app/_services/pathology.service';
import { SymptomService } from 'src/app/_services/symptom.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';

@Component({
  selector: 'app-consultation-follow-up',
  templateUrl: './consultation-follow-up.component.html',
  styleUrls: ['./consultation-follow-up.component.css']
})
export class ConsultationFollowUpComponent implements OnInit {

  /**
  * init first page
  */
  public page = 0;

  /**
   * number of item par page default 10
   */
  public perPage = 10;


  /**
   *  order direction
   */
  order = 'desc';

  /**
   * order column default id
   */
  sort = 'startDate';

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
  consultations: object;

  /**
  * patient id
  */
  @Input()
  patientId: number;

  /** */
  @Input()
  patientConsultations: object;

  /**
   * define if request result has datas or no
   */
  hasNoData: boolean;

  /**
   * Msg to display when request result is empty
   */
  EmptyMessage: String;

  @Output()
  activeTabEvent : EventEmitter <string> = new EventEmitter();

  
  /**
   * the form
   */
  form: FormGroup;

  /**
   * consultation object
   */
  consultation: Object;

  pathologies : Object;
  symptoms : Object;

  updatedMessage : string;

  /**
   * define consultation type option
   */
  consultationTypes = [
    { id: 'p', value: 'Prémière consultation' },
    { id: 's', value: 'Consultation de surveillance' },
  ];

  constructor(
    private consultationService: ConsultationService,
    private alertService : AlertService,
    private pathologyService : PathologyService,
    private symptomService : SymptomService
  ) { }

  ngOnInit(): void {
    this.getConsultations();
   this.initForm();
   this.pathologyService.getIdAndName().subscribe( res => { this.pathologies = res;}); 
   this.symptomService.getIdAndName().subscribe (res => { this.symptoms = res;})
  }

  /**
   * 
   */
  getConsultations() {
    let data = {
      "page": this.page,
      "size": this.perPage,
      "sort": 'startDate',
      "order": 'desc',
      'patient': this.patientId
    };

    this.consultationService.findAllPatientConsultations(data).subscribe(
      res => {
        if (res) {

          console.log(res);
          this.loading = false;
          this.hasNoData = false;
          this.totalItem = res['totalElements'];
          this.pages = res['totalPages'];
          this.consultations = res['content'];
          this.page = res['pageNumber'] + 1;
        };
      },
      error => {
        this.consultations = [];
        this.loading = false;
        this.hasNoData = true;
        this.EmptyMessage = error;
      })
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getConsultations();
  }

  sendActiveTab(activeTab) {
    this.activeTabEvent.emit(activeTab);
  }


  /**
   * init form
   */
  initForm() {

    this.form = new FormGroup({
      date: new FormControl(null), 
      conclusionExamResult: new FormControl(null),
      admission: new FormControl(null),
      conclusion: new FormControl({value: '', disabled:true}),
      examinationReasons: new FormControl({value: '', disabled:true}),
      examinationType: new FormControl({value: '', disabled:true}),
      history: new FormControl({value: '', disabled:true}),
      id: new FormControl(0),
      pathologies: new FormControl(null),
      symptoms: new FormControl({value: 'null', disabled:true} ),
      startDate: new FormControl(null)
     
    })
  }

  selectedItem(itemId){
    this.updatedMessage = null;
    this.consultationService.findById(itemId).subscribe(res => {
    let pathologies = res['spathologies'].map(({ id }) => id);
    let symptoms = res['symptoms'].map(({ id }) => id);
    this.form.get('conclusion').setValue(res.conclusion);
    this.form.get('examinationReasons').setValue(res.examinationReasons);
    this.form.get('history').setValue(res.history);
    this.form.get('id').setValue(res.id);
    this.form.get('date').setValue(dateOutputFormat( res.startDate));
    this.form.get('examinationType').setValue(res.examinationType);
    this.form.get('conclusionExamResult').setValue(res['conclusionExamResult']);
    this.form.get('admission').setValue(res.admission);
    this.form.get('pathologies').setValue(pathologies);
    this.form.get('symptoms').setValue(symptoms);
   
  })

    
  }

  /**
   * save 
   */
  save() {

    //validate form '
    this.alertService.clear();
    let data = this.form.value;
    if (this.form.valid) {
        this.consultationService.update(data).subscribe(res => {
            this.consultation = res;
            this.updatedMessage = 'Consultation mis a jour avec succés';
        })

    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

}
