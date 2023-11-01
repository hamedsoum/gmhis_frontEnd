import { Component, Input, OnInit } from "@angular/core";
import { Admission } from "src/app/admission/model/admission";
import { GmhisUtils } from "src/app/shared/base/utils";

@Component({ selector: 'gmhis-invoice-create-update-header-information', templateUrl: './gmhis-invoice-create-update-header-information.component.html'})
export class GMHISInvoiceCreateUpdateHeaderInformationComponent implements OnInit {

    @Input() styleClass: string;

    @Input() data: Admission;

    ngOnInit(): void {
        GmhisUtils.notNull(this.data, "data");
    }
    
}