import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { dateInputFormat } from 'src/app/_utility/date/date-input-format';
import { PatientService } from "./../../_services/patient.service";
import { AlertService } from "./../../_utility/alert/alert.service";
import { Router } from "@angular/router";
import { Insured } from "./../../_models/insured.model";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  
/**
   * title to display
   */
  title = 'Modification de patient';

  /**
   * patient id
   */
  id: number;

  /** 
   * Insured model
  */
insured: Insured;

  constructor( 
    private activatedRoute : ActivatedRoute,
    private patientService : PatientService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=> { this.id= params.id; })    

  }

   /**
   * update existing object
   * @param data object
   */
   /**
   * update existing admission
   * @param data object
   */
  save(data) {
   
    let patient = data.patient;
    patient.birthDate = dateInputFormat(patient.birthDate);

    this.patientService.update(patient).subscribe(result => {
          this.router.navigate(['/patient/list']);
          this.alertService.success('Patient modifié!')
    })
  }
}
