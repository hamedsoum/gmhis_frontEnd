import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admission } from 'src/app/_models/admission.model';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { PatientService } from 'src/app/_services/patient.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import { AdmissionService } from "./../../../_services/admission.service";
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter } from "./../../../_utility/date/ngb-datepicker";
import { PracticianService } from 'src/app/_services/practician.service';
import { ActService } from 'src/app/_services/act.service';


@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ] // define custom NgbDatepickerI18n provider

})

export class AdmissionFormComponent implements OnInit {

  /**
   *   form Group
   */
  form: FormGroup;

  /**
  * form submission action, it will get the value of the action to do
  */
  formAction = '';

  /**
   * invalid from controls
   */
  invalidFormControls: any;

  /**
   * Define service options
   */
  services: object;

  /**
   * Define act options
   */
  acts: object;

  /**
   * Define doctor options
   */
  practicians: object;

  /**
   * parent component input
   */
  @Input()
  patientId: number;

  /**
   * parent component input
   */
  @Input()
  admissionId: number;

  /**
   * parent component input
   */
  @Input()
  title: string;

  /**
   * child component output
   */
  @Output()
  admissionEmitter: EventEmitter<any> = new EventEmitter();

  /**
   * the component model
   */
  admission: Admission

  /**
   * the admission billed state
   */
  isBilled = false;

  /**
    * date picker model
    */
  datePicker: NgbDateStruct;

  /**
   * time picker model
   */
  timePicker = { hour: 0, minute: 0, second: 0 };

  /**
   * time piker second
   */
  seconds = true;

  /**
   * action to do for display error msg and redirect
   * @param msg 
   */
  errorAction = function (msg: string, redirectTo: string) {
    this.router.navigate([redirectTo]);
    this.alertService.error(msg);
  };


  constructor(
    private patientService: PatientService,
    private medicalService: medicalServiceService,
    private actService: ActService,
    private practicianService: PracticianService,
    private alertService: AlertService,
    private admissionService: AdmissionService,
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.initAddAction();
    this.initUpdateAction();
    this.medicalService.getIdAndName().subscribe(res => { this.services = res; });
    this.actService.getIdAndName().subscribe(acts => { this.acts = acts });
    this.patientId = 1; //TODO : delete later
  }

  /**
   *  init form 
   */
  initForm() {
    this.form = new FormGroup({
      id: new FormControl(0),
      patientExternalId: new FormControl({ value: '', disabled: true }, /*Validators.required*/),
      patient: new FormControl(''),
      name: new FormControl({ value: '', disabled: true }, Validators.required),
      date: new FormControl('', [Validators.required]),
      time: new FormControl(''),
      service: new FormControl('', Validators.required),
      act: new FormControl('', Validators.required),
      practician: new FormControl('', Validators.required),
    });
  }

  /**
   * init the form value when adding
   */
  initAddAction() {

    if (this.patientId) {

      this.patientService.findById(this.patientId).subscribe(
        patient => {
          if (patient) {
            let currentDate = new Date();
            this.timePicker = { hour: currentDate.getHours(), minute: currentDate.getMinutes(), second: currentDate.getSeconds() };
            let admission = {
              'patientExternalId': patient.patientExternalId,
              'name': patient.firstName + " " + patient.lastName,
              'date': dateOutputFormat(new Date()),
              'time': this.timePicker,
              'patient': patient.id
            };
            this.form.patchValue(admission);

          } else {
            this.errorAction("Admission impossible car le patient n'existe pas", '/patient/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de l'ajout", '/patient/list')
          
        })
    }

  }

  /**
   * init ths form value when updating
   */
  initUpdateAction() {

    if (this.admissionId) {

      this.admissionService.findById(this.admissionId).subscribe(
        admission => {
          if (admission) { 
            console.log(admission.admissionStatus);
            
            if(admission.admissionStatus == 'B') this.isBilled = true;
            let time = new Date(admission.date);
            this.timePicker = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
            this.practicianService.findByService(admission.service).subscribe(practicians => { this.practicians = practicians;});
            this.form.patchValue(admission);
            this.form.get('name').setValue(admission.patientFirstName + " " + admission.patientLastName);
            this.form.get('date').setValue( dateOutputFormat(time));
            this.form.get('time').setValue(this.timePicker);
            
          } else {
            this.errorAction("Modification impossible car l'admission n'existe pas", '/admission/list');
          }
        },
        error => {
          this.errorAction("Erreur lors de la modification", '/admission/list');
          
        })
    }
  }

  /**
   * fetch practicians according to the selected services
   * @param selectedOption 
   */
  onServiceChange(selectedOption) {
    this.form.get('practician').reset();
    this.practicianService.findByService(selectedOption).subscribe(practicians => {
      this.practicians = practicians;
    });
  }

  /**
    * fonction called at the form submission action whenever to add or update the patient
    */
  save() {
    // reset alerts on submit
    this.alertService.clear();

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.admission = this.form.value;
    this.admission.date = dateInputFormat(this.form.get('date').value);
    let time = this.form.get('time').value;
    this.admission.date.setHours(time.hour);
    this.admission.date.setMinutes(time.minute);
    this.admission.date.setSeconds(time.second);

    if (this.form.valid) {
      this.admissionEmitter.emit({ admission: this.admission, action: this.formAction })
    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

  /**
   * get the form submission action
   * @param action : string
   */
  actionToDo(action) {
    this.formAction = action;
  }

  /**
   * action to Do when  ckick on cancel button
   */
  cancelAction() {
    this.errorAction('Action annulée', '/admission/list');
  }

}
