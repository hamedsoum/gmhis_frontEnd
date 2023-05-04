import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Consultation } from 'src/app/_models/consultation.model';
import { ConsultationService } from 'src/app/_services/consultation.service';
import { PathologyService } from 'src/app/_services/pathology.service';
import { SymptomService } from 'src/app/_services/symptom.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { dateOutputFormat } from 'src/app/_utility/date/date-output-format';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {

  /**
   * the form
   */
  form: FormGroup;

  @Input()
  patientId: number;
 
  @Input()
  admissionId: number;

  @Input()
  startDate: Date;

  /**
   * consultation object
   */
  consultation: Consultation;

  pathologies : Object;
  symptoms : Object;

  /**
   * define consultation type option
   */
  consultationTypes = [
    { id: 'p', value: 'Prémière consultation' },
    { id: 's', value: 'Consultation de surveillance' },
  ];


  /** 
   * invalid from controls
   */
  invalidFormControls: any;

  constructor(
    private alertService: AlertService,
    private consultationService: ConsultationService,
    private pathologyService : PathologyService,
    private symptomService : SymptomService
  ) { }

  ngOnInit(): void {    
    this.initForm(); 
    this.pathologyService.getIdAndName().subscribe( res => { this.pathologies = res;}); 
    this.symptomService.getIdAndName().subscribe (res => { this.symptoms = res; console.log(res);
    });
  }

  /**
   * init form
   */
  initForm() {
    this.form = new FormGroup({
      date: new FormControl(dateOutputFormat(new Date())), 
      conclusionExamResult: new FormControl(''),
      admission: new FormControl(this.admissionId),
      conclusion: new FormControl('', Validators.required),
      examinationReasons: new FormControl('', Validators.required),
      examinationType: new FormControl('', Validators.required),
      history: new FormControl('', Validators.required),
      id: new FormControl(0),
      pathologies: new FormControl(null ),
      symptoms: new FormControl(null ),
      startDate: new FormControl(this.startDate)
     
    })
  }

  /**
   * save 
   */
  save() {

    //validate form '
    this.invalidFormControls = invalidformControls(this.form);
    this.alertService.clear();
    let data = this.form.value; 
    
    if (this.form.valid) {
      if (!this.consultation) {
        this.consultationService.save(data).subscribe(res => {
          
            this.alertService.success('Consultation ajoutée au dossier du patient avec succes ! ');
            this.consultation = res;
            this.form.get("conclusion").disable();
            this.form.get("examinationReasons").disable();
            this.form.get("examinationType").disable();
            this.form.get("history").disable();
            this.form.get("symptoms").disable();

        });
      } else {
        this.consultationService.update(data).subscribe(res => {
            this.alertService.success('Consultation mis a jour avec succes ! ');
            this.consultation = res;
        })
      }

    } else {
      this.alertService.error('Formulaire non valid');
    }
  }

  
}
