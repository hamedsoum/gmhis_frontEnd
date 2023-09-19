import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISDeathPartial } from "../api/domain/gmhis.death.domain";

@Component({selector: 'gmhis-death-record', templateUrl: './gmhis-death-record.component.html'})
export class GMHISDesathRecord implements OnInit {

    @Input() death: GMHISDeathPartial;

    ngOnInit(): void {
        GmhisUtils.notNull(this.death, 'Death');
    }
    
}