import { Patient } from "src/app/patient/patient";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";
import { GMHISQuotationItemCreate } from "./gmhis.quotation.item";

export interface GMHISQuotation extends AuditPKDTO {
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

    discount?: number,

    netToPay: number;

    status: GMHISQuotationStatus;
}

export interface GMHISQuotationCreate {
    affection: string,

    indication?: string,

    insuranceID?: number,

    patientID: number,

    totalAmount: number,

    moderatorTicket?: number,

    quotationItems: GMHISQuotationItemCreate[];

    cmuPart?: number;

    discount?: number,

    netToPay?: number;

   insurancePart?: number;
}

export interface GMHISQuotationPartial {
    dateOp : string;

    id: string,

    code: string,

    quotationNumber: string,

    insuranceName?: string,
    insuranceID?: string

    affection: string,

    indication?: string,

    patientName: GMHISName,

    patientID: number,

    totalAmount: number,

    moderatorTicket?: number,

    status : GMHISQuotationStatus,

    quotationItems: GMHISQuotationItemCreate;

    cmuPart?: number;

    discount?: number,

    netToPay: number;

    insurancePart?: number;
}

export enum GMHISQuotationStatus {
   DRAFT = 'draft',
   PENDING = 'pending',
   TO_BE_INVOICED = 'to_be_invoiced',
   INVOICED = 'invoiced',
   REFUSED = 'refused'
}

export type  GMHISQuotationStatusStr = 'draft' | 'pending' | 'to_be_invoiced' | 'invoiced' | 'refused';


export interface GMHISQuotationAmounts  {
    totalAmount: number,

    CMUModeratorTicket: number,

    insuranceModeratorTicket: number, 

    moderatorTicket: number,

    cmuPart: number,

    insurancePart: number,

    netToPay: number
}