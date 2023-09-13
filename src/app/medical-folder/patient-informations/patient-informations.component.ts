import { Component, Input, OnInit } from "@angular/core";
import { Patient } from "src/app/patient/patient";
import { Utils } from "src/app/shared/base/utils";

@Component({selector: 'patient-informations', templateUrl: './patient-informations.component.html'})
export class PatientInformations implements OnInit {
    @Input() styleClass?: string;

    @Input() patient : Patient;

    ngOnInit(): void {
        console.log(this.patient);
        
        Utils.notNull(this.patient, 'patient');
    }
    
}