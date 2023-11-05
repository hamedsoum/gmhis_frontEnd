import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";

@Component({selector: 'gmhis-patient-insurance', templateUrl: './gmhis-patient-insurance.component.html'})
export class GMHISPatientInsuranceComponent implements OnInit {
    @Input() styleClass?: string;

    @Input() data: any;

    ngOnInit(): void {        
        GmhisUtils.notNull(this.data, "data");
    }
    
}