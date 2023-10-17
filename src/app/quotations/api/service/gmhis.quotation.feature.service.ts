import { Injectable } from "@angular/core";
import { GMHISPatientType } from "src/app/patient/patient";
import { GMHISQuotation } from "../domain/gmhis.quotation";
import { GMHISQuotationItem } from "../domain/gmhis.quotation.item";

Injectable()
export class GMHISQuotationFeatureService {

    quotationTotalAmount(quotationItems: GMHISQuotationItem[], patientType: GMHISPatientType, CMUApplied: boolean): {totalAmount: number,CMUModeratorTicket: number,insuranceModeratorTicket: number , moderatorTicket: number} {
        let totalAmount = 0; 
        let CMUModeratorTicket = 0;
        let insuranceModeratorTicket = 0;

        quotationItems.forEach(el => totalAmount += (el.unitPrice * el.quantity));

        if (patientType === GMHISPatientType.INSURED_PATIENT) {
            if (!CMUApplied) {
                insuranceModeratorTicket = this.quotationTotalAmountInsurance(quotationItems, totalAmount);
            } else {
                CMUModeratorTicket =  this.quotationTotalAmountCMU(quotationItems, totalAmount)
                insuranceModeratorTicket =  (totalAmount - CMUModeratorTicket) - this.quotationTotalAmountInsurance(quotationItems, totalAmount);
            }
        }

        return { totalAmount : totalAmount,CMUModeratorTicket: CMUModeratorTicket,insuranceModeratorTicket: insuranceModeratorTicket, moderatorTicket: CMUModeratorTicket +  insuranceModeratorTicket }

    }

    quotationTotalAmountCMU(quotationItems: GMHISQuotationItem[], totalAmount: number): number {
        let CMUtotalAmount: number = 0;
        quotationItems.forEach(el => CMUtotalAmount += (el.cmuAmount * el.quantity) * el.cmuPercent)

        return totalAmount - CMUtotalAmount;
    }

    quotationTotalAmountInsurance(quotationItems: GMHISQuotationItem[], totalAmount: number): number {
        let InsuranceTotalAmount: number = 0;

        quotationItems.forEach(el => InsuranceTotalAmount += (el.unitPrice * el.quantity) * el.insurancePercent)

        return totalAmount - InsuranceTotalAmount;
    }

}