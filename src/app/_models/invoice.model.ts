import { IAdmission } from '../admission/model/admission';
import { IPatient } from '../patient/patient';
import { Customer } from './customer.model';
import { User } from './user.model';

export interface Invoice {
  customer: Customer;
  deliveryNote: [];
  discount: 0;
  id: 0;
  invoicedArticles: string;
  specialDiscount: 0;
  date: Date;
  totalHt: number;
  totalTtc: number;
  tvaValue: number;
  airsiValue: number;
  includeTva: Boolean;
  includeAirsi: Boolean;
  updatedUser: User;
  excludeAirsi: Boolean;
  withoutAirsi: Boolean;
  invoiceNumber: string;
  deliveryAddress: string;
  customerOrderNumber: string;
  taxpayerAccount: string;
  billDate: Date;
  admision : IAdmission;
  patient : IPatient;
  patientType :string;
  patientPart : number;
  partTakenCareOf : number;
  total : string;
}
