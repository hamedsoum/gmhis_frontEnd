import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/_services/patient.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { Insured } from './../../_models/insured.model';
import { Patient } from "./../../_models/patient.model";


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  /**
   * title to display
   */
  title = 'Nouveau patient';

  insured: Insured;

  patient: Patient;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private alertService: AlertService,

  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new patient
   * @param data object
   * 
   */
  save(data) {

    let patient = data.patient;
    patient.birthDate = dateInputFormat(patient.birthDate);
    let action = data.action;

    this.patientService.save(patient).subscribe(
      result => {
     
          this.router.navigate(['/patient/list']);
          this.alertService.success('Patient creé')
      
    }, error => {
      this.alertService.error(error);
    })
  }
}
