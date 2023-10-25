import { Injectable } from "@angular/core";
import { GMHISPatientType } from "src/app/patient/patient";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHISInvoiceHAmounts } from "../domain/gmhis.quotation";
import { GMHISInvoiceHItem, GMHISInvoiceHItemCreate } from "../domain/gmhis.quotation.item";

@Injectable({providedIn: 'root'})
export class GMHISInvoiceHFeatureService {

    public quotationTotalAmount(quotationItems: GMHISInvoiceHItem[] | GMHISInvoiceHItemCreate[], patientType: GMHISPatientType, CMUApplied: boolean, insurranceCoverage?: number): GMHISInvoiceHAmounts {
       let amounts :GMHISInvoiceHAmounts = {
           totalAmount: 0,
           CMUModeratorTicket: 0,
           insuranceModeratorTicket: 0,
           moderatorTicket: 0,
           cmuPart: 0,
           insurancePart: 0,
           netToPay: 0
       }

        quotationItems.forEach(el => amounts.totalAmount += (el.unitPrice * el.quantity));
        
       if (CMUApplied) {
        amounts.CMUModeratorTicket = this.CMUTotalAmount(quotationItems);
        amounts.cmuPart =  amounts.totalAmount - this.CMUTotalAmount(quotationItems);

            if (patientType === GMHISPatientType.INSURED_PATIENT) {
                amounts.insurancePart = this.InsuranceTotalAmount(amounts.CMUModeratorTicket,insurranceCoverage);
                amounts.moderatorTicket = amounts.insuranceModeratorTicket =  amounts.CMUModeratorTicket - amounts.insurancePart;
            } else amounts.moderatorTicket = amounts.totalAmount -  amounts.cmuPart;
            
        } else {
            if (patientType === GMHISPatientType.INSURED_PATIENT && !GmhisUtils.isNull(insurranceCoverage)) {
                amounts.insurancePart =  this.InsuranceTotalAmount(amounts.totalAmount,insurranceCoverage);
                amounts.insuranceModeratorTicket = amounts.totalAmount - amounts.insurancePart;
                amounts.moderatorTicket = amounts.insuranceModeratorTicket;
                amounts.netToPay = amounts.moderatorTicket;
            } 

        }

        amounts.netToPay = (amounts.moderatorTicket > 0) ? amounts.moderatorTicket : amounts.totalAmount;
        
        return amounts;

    }

    private CMUTotalAmount(quotationItems: GMHISInvoiceHItem[]| GMHISInvoiceHItemCreate[]): number {
        let CMUtotalAmount: number = 0;
        quotationItems.forEach(el => {

            CMUtotalAmount += el.unitPrice - ((el.cmuAmount * el.quantity) * el.cmuPercent/100);
            
        });
        
        return CMUtotalAmount;
    }

    private InsuranceTotalAmount(amount, insurranceCoverage: number): number {        
        return amount * (insurranceCoverage/100);
    }

}