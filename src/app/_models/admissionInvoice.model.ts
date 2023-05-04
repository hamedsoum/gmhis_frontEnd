import { Admission } from './admission.model';
import { Insurance } from './insurance.model';
import { InsuranceSubscriber } from './insuranceSubscriber.model';
import { Patient } from './patient.model';

export interface AdmissionInvoice {
    accountNumber: string;
    acts: [
      {
        act: number;
        admission: number;
        pratician: number
      }
    ];
    admission: number;
    billNumber: string;
    billStatus: string;
    billType: string;
    convention: number;
    discountInCfa: number;
    discountInPercentage: number;
    id: number;
    insured: number;
    partTakenCareOfNumber: string;
    patientType: string
}