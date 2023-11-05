import { Component, Input } from "@angular/core";
import { Patient } from "../patient";

@Component({selector: 'gmhis-patient-details', templateUrl:'./gmhis-patient-details.component.html'})
export class GMHISPatientDetailsComponent {
    @Input() styleClass?: string;

    @Input() data: Patient;
}