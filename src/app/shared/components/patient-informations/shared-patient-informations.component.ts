import { Component, Input, OnInit } from "@angular/core";
import { Patient } from "src/app/patient/patient";
import { GmhisUtils } from "src/app/shared/base/utils";

@Component({selector: 'shared-patient-informations', templateUrl: './shared-patient-informations.component.html'})
export class SharedPatientInformations implements OnInit {
    @Input() styleClass?: string;

    @Input() patient : Patient;

    ngOnInit(): void {        
        GmhisUtils.notNull(this.patient, 'patient');
    }
    
}