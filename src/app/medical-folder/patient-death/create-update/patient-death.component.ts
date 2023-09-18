import { Component, Input, OnInit } from "@angular/core";
import { PatientService } from "src/app/patient/patient.service";

@Component({selector: 'gmhis-patient-death', template: `
`})
export class GMHISPatientDeathCreateUpdate implements OnInit {

    @Input() styleClass?: string

    
    constructor(private patientService: PatientService){}

    ngOnInit(): void {

    }
 
    
}