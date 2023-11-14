import { Component, Input, OnInit } from "@angular/core";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISQuotationStatus } from "../api/domain/gmhis.quotation";

@Component({selector: 'gmhis-quotation-status', templateUrl: './gmhis-quotation-status.component.html', styleUrls: ['./gmhis-quotation-status.component.scss']})
export class GMHISQuotationSttusComponent implements OnInit {
    @Input() styleClass: string

    @Input() status: GMHISQuotationStatus;

    value: string;
    satusBackgroundColor: string;

    ngOnInit(): void {
        GmhisUtils.notNull(this.status, "status");
        this.handleQuotationStatus(this.status)
    }

    handleQuotationStatus(status): void {
        if(status === GMHISQuotationStatus.INVOICED) console.log(status);
        switch (status) {
            case GMHISQuotationStatus.DRAFT:
                this.value = 'Brouillon';
                this.satusBackgroundColor = GMHISQuotationStatus.DRAFT;
                break;
            case GMHISQuotationStatus.PENDING:
                this.value = 'En Attente';
                this.satusBackgroundColor = GMHISQuotationStatus.PENDING;
                break;
             case GMHISQuotationStatus.TO_BE_INVOICED:
                this.value = 'À Facturer';
                this.satusBackgroundColor = GMHISQuotationStatus.TO_BE_INVOICED;
                break;
            case GMHISQuotationStatus.INVOICED:
                this.value = 'Facturé' 
                this.satusBackgroundColor = GMHISQuotationStatus.INVOICED;
                break;
            case GMHISQuotationStatus.REFUSED:
                this.value = 'Refusé';
                this.satusBackgroundColor = GMHISQuotationStatus.REFUSED;  
                break;  
            default:
              throw new Error(`Unknown status ${status}`);
        }
    }
    
}