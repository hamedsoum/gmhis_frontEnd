import { ActPartial } from "src/app/act/act/models/act";
import { Practician } from "src/app/practician/practician";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";
import { GMHISInvoiceHPartial } from "./gmhis.quotation";

export interface GMHISInvoiceHItem extends AuditPKDTO{
    id: string;

    code: string;

    actId: number;
    
    actCoefficient: number;

    actCodeValue: number;

    quantity: number;

    unitPrice: number;

    totalAmount: number;

    quotation: GMHISInvoiceHPartial;

    moderatorTicket?: number;

    cmuAmount?: number;

    cmuPercent?: number;

    insurancePercent?: number;

    practician?: Practician,

}

export interface GMHISInvoiceHItemCreate {

    actId: number;

    quantity: number;

    totalAmount: number;

    cmuAmount?: number;

    cmuPercent?: number;

    insurancePercent?: number;

    moderatorTicket?: number;

    practicianID?: number;

}

export interface GMHISInvoiceHItemPartial {

    actID: number;

    actCodeValue: number;

    actCoefficient: number;

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

    dateOp: string;

    act: ActPartial;

    actCode: string;

}