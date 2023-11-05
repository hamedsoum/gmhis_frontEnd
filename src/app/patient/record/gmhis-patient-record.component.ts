import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";
import { Patient } from "../patient";

@Component({selector: 'gmhis-patient-record', templateUrl: './gmhis-patient-record.component.html'})
export class GMHISPatientRecordComponent implements OnInit {
    @Input() styleClass?: string;

    @Input() data: Patient;

    ngOnInit(): void {
        GmhisUtils.notNull(this.data, "data");
        console.log(this.data);
        
    }
    
}