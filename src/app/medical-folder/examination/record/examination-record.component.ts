import { Component, Input, OnInit } from "@angular/core";
import { Patient } from "src/app/patient/patient";
import { IExamination } from "../models/examination";

@Component({selector:'examination-record', templateUrl:'./examination-record.component.html'})
export class examinationRecord implements OnInit {
    @Input() styleClass?: string;

    @Input() patient: Patient;
    @Input() examination: IExamination;

    ngOnInit(): void {
        this.notNull(this.examination);        
    }

    private notNull(arg: any):void {
        console.log(arg);
        if(arg == null || arg == undefined) {
            throw new Error(`${arg} Argument must not be null`);
        }
    }
}