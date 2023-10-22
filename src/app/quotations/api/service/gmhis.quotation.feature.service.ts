import { Injectable } from "@angular/core";
import { GMHISPatientType } from "src/app/patient/patient";
import { GMHISQuotationAmounts } from "../domain/gmhis.quotation";
import { GMHISQuotationItem, GMHISQuotationItemCreate } from "../domain/gmhis.quotation.item";

@Injectable({providedIn: 'root'})
export class GMHISQuotationFeatureService {

    public quotationTotalAmount(quotationItems: GMHISQuotationItem[] | GMHISQuotationItemCreate[], patientType: GMHISPatientType, CMUApplied: boolean, insurranceCoverage?: number): GMHISQuotationAmounts {
       let amounts :GMHISQuotationAmounts = {
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
            if (patientType === GMHISPatientType.INSURED_PATIENT) {
                amounts.insurancePart =  this.InsuranceTotalAmount(amounts.totalAmount,insurranceCoverage);
                amounts.insuranceModeratorTicket = amounts.totalAmount - amounts.insurancePart;
                amounts.moderatorTicket = amounts.insuranceModeratorTicket;
                amounts.netToPay = amounts.moderatorTicket;
            } 

        }

        amounts.netToPay = (amounts.moderatorTicket > 0) ? amounts.moderatorTicket : amounts.totalAmount;
        
        console.log(amounts);
        return amounts;

    }

    private CMUTotalAmount(quotationItems: GMHISQuotationItem[]| GMHISQuotationItemCreate[]): number {
        let CMUtotalAmount: number = 0;
        quotationItems.forEach(el => {

            CMUtotalAmount += el.unitPrice - ((el.cmuAmount * el.quantity) * el.cmuPercent/100);
            
        });
        

        return CMUtotalAmount;
    }

    private InsuranceTotalAmount(amount, insurranceCoverage: number): number {
        console.log(insurranceCoverage);
        
        return amount * (insurranceCoverage/100);
    }

}