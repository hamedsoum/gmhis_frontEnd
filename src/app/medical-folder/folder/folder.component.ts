import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from 'src/app/_models/admission.model';
import { Patient } from 'src/app/_models/patient.model';
import { AdmissionService } from 'src/app/_services/admission.service';
import { ConsultationService } from 'src/app/_services/consultation.service';
import { PatientService } from 'src/app/_services/patient.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

 
  public patientId : number;

  public admissionId : number;

  public startDate = new Date();

  title = '';
 
  public patient : Object;

  public admission : Object;

  public activeTab: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService : PatientService,
    private admissionService :  AdmissionService,   
  ) { }
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       this.patientId = params.patientId;
       this.admissionId = params.admissionId;   
    })

    this.patientService.findById(this.patientId).subscribe(res =>{ this.patient=res; });
    this.admissionService.findById(this.admissionId).subscribe(res =>{ this.admission=res; });
  }

  receiveActiveTab($event) {
    this.activeTab = $event;
    
  }
  
}
