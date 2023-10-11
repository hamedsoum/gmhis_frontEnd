import { Component, Input, OnInit } from "@angular/core";
import { IExamination } from "src/app/medical-folder/examination/models/examination";
import { Patient } from "src/app/patient/patient";

@Component({selector:'shared-examination-record', templateUrl:'./shared-examination-record.component.html'})
export class SharedxaminationRecord implements OnInit {
    @Input() styleClass?: string;

    @Input() patient: Patient;
    @Input() examination: IExamination;

    docSrc: any;

    constructor( ){}
    ngOnInit(): void {
        this.notNull(this.examination);        
    }

    private notNull(arg: any):void {
        if(arg == null || arg == undefined) {
            throw new Error(`${arg} Argument must not be null`);
        }
    }

   
}