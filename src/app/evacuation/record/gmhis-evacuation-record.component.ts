import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISEvacuation, GMHISEvacuationPartial } from "../api/domain/evacuation.domain";

@Component({selector:'gmhis-evacuation-record', templateUrl: './gmhis-evacuation-record.component.html'})
export class GMHISEvacuationRecordComponent implements OnInit {
    
    @Input() evacuation: GMHISEvacuationPartial;

    ngOnInit(): void {
        GmhisUtils.notNull(this.evacuation, 'Evacuation');
    }
    
}