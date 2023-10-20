import { Injectable } from "@angular/core";
import { GMHISPatientType } from "src/app/patient/patient";
import { GMHISQuotationAmounts } from "../domain/gmhis.quotation";
import { GMHISQuotationItem, GMHISQuotationItemCreate } from "../domain/gmhis.quotation.item";

@Injectable({providedIn: 'root'})
export class GMHISQuotationFeatureService {

    public quotationTotalAmount(quotationItems: GMHISQuotationItem[] | GMHISQuotationItemCreate[], patientType: GMHISPatientType, CMUApplied: boolean, insurranceCoverage?: number): GMHISQuotationAmounts {
       let totalAmounts :GMHISQuotationAmounts = {
           totalAmount: 0,
           CMUModeratorTicket: 0,
           insuranceModeratorTicket: 0,
           moderatorTicket: 0,
           cmuPart: 0,
           insurancePart: 0,
           netToPay: 0
       }

        quotationItems.forEach(el => totalAmounts.totalAmount += (el.unitPrice * el.quantity));
        
       if (CMUApplied) {
        totalAmounts.CMUModeratorTicket = this.CMUTotalAmount(quotationItems);
        totalAmounts.cmuPart =  totalAmounts.totalAmount - this.CMUTotalAmount(quotationItems);

            if (patientType === GMHISPatientType.INSURED_PATIENT) {
                totalAmounts.insurancePart = this.InsuranceTotalAmount(totalAmounts.CMUModeratorTicket,insurranceCoverage);
                totalAmounts.moderatorTicket = totalAmounts.insuranceModeratorTicket =  totalAmounts.CMUModeratorTicket - totalAmounts.insurancePart;
            } else totalAmounts.moderatorTicket = totalAmounts.totalAmount -  totalAmounts.cmuPart;
            
        } else {
            if (patientType === GMHISPatientType.INSURED_PATIENT) {
                totalAmounts.insuranceModeratorTicket =  this.InsuranceTotalAmount(totalAmounts.totalAmount,insurranceCoverage);
                totalAmounts.moderatorTicket = totalAmounts.totalAmount - totalAmounts.insuranceModeratorTicket;
                totalAmounts.netToPay = totalAmounts.moderatorTicket;
            } 

        }

        totalAmounts.netToPay = (totalAmounts.moderatorTicket > 0) ? totalAmounts.moderatorTicket : totalAmounts.totalAmount;
        
        console.log(totalAmounts);
        return totalAmounts;

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