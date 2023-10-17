import { Practician } from "src/app/practician/practician";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";

export interface GMHISQuotationItem extends AuditPKDTO{
    id: string;

    code: string;

    actId: number;
    
    actCode: string;
    
    actNumber: number;

    quantity: number;

    unitPrice: number;

    totalAmount: number;

    quotation: string;

    moderatorTicket?: number;

    cmuAmount?: number;

    cmuPercent?: number;

    insurancePercent?: number;

    practician?: Practician,

}

export interface GMHISQuotationItemCreate {

    actId: number;

    actCode: string;

    actNumber: number;

    quantity: number;

    unitPrice: number;

    totalAmount: number;

    moderatorTicket?: number;

    cmuAmount?: number;

    cmuPercent?: number;

    insurancePercent?: number;

    PracticianID?: number;

}

export interface GMHISQuotationItemPartial {

    actID: number;

    actCode: string;

    actNumber: number;

    quantity: number;

    unitPrice: number;

    totalAmount: number;

    quotationID: string;

    moderatorTicket?: number;

    cmuAmount?: number;

    cmuPercent?: number;

    insurancePercent?: number;

    praticianName?: GMHISName;

    practicianID?: number;
}