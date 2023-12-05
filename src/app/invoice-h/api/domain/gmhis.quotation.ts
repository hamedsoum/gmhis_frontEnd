import { Patient } from "src/app/patient/patient";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";
import { GMHISInvoiceHItemCreate } from "./gmhis.quotation.item";

export interface GMHISInvoiceH extends AuditPKDTO {
    id: string,

    code: string,

    quotationNumber: string,

    affection: string,

    indication?: string,

    insuranceId?: string,

    insuranceName?: string,

    patient: Patient,

    totalAmount: number,

    moderatorTicket?: number,

    status: GMHISInvoiceHStatus;

    discount?: number,

    netToPay?: number;
}

export interface GMHISInvoiceHCreate {
    affection: string,

    indication?: string,

    insuranceID?: number,

    patientID: number,

    totalAmount: number,

    moderatorTicket?: number,

    invoiceHItems: GMHISInvoiceHItemCreate[];

    cmuPart?: number;

   insurancePart?: number;

   discount?: number,

   netToPay?: number;
}

export interface GMHISInvoiceHPartial {
    dateOp? : string;

    id?: string,

    code?: string,

    invoiceNumber?: string,

    insuranceName?: string,
    insuranceID?: string

    affection: string,

    indication?: string,

    patientName: GMHISName,

    patientID: number,

    totalAmount: number,

    moderatorTicket?: number,

    status? : GMHISInvoiceHStatus,

    quotationItems?: GMHISInvoiceHItemCreate;

    cmuPart?: number;

    insurancePart?: number;

    discount?: number,

    netToPay?: number;
}

export enum GMHISInvoiceHStatus {
   DRAFT = "draft",
   PENDING = "pending",
   TO_BE_INVOICED = "to_be_invoiced",
   INVOICED = "invoiced",
   REFUSED = "refused"
}

export type  GMHISInvoiceHStatusStr = 'draft' | 'pending' | 'to_be_invoiced' | 'invoiced' | 'refused';


export interface GMHISInvoiceHAmounts  {
    totalAmount: number,

    CMUModeratorTicket: number,

    insuranceModeratorTicket: number, 

    moderatorTicket: number,

    cmuPart: number,

    insurancePart: number,

    netToPay: number
}