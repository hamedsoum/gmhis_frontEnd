import { AuditPKDTO } from "../shared/models/Audit";

export enum GMHISPatientType {
  CASH_PATIENT = 'Comptant',
  INSURED_PATIENT = 'Assuré'
}

export interface GMHISCautionTransaction extends AuditPKDTO {

  libelle: string,

  action: 'debit' | 'credit';

  amount: number;

  patientAccountBalance: number;

  patient: Patient;

}

export interface GMHISCautionTransactionPartial {
  id: number,

  libelle: string,

  action: 'debit' | 'credit';

  amount: number;

  patientAccountBalance: number;

  patient: Patient;

  date; string;
}

export interface GMHISCautionTransactionCreate {

  libelle: string,

  action: 'debit' | 'credit';

  amount: number;

  patientID: number;
  
}


export interface Patient {
  service?: any;
  id: number;
  patientExternalId: string;
  cnamNumber: string;
  lastName: string;
  firstName: string;
  maidenName: string;
  gender: string;
  civility: string;
  birthDate: Date;
  profession?: string;
  maritalStatus?: string;
  numberOfChildren?: number;
  address?: string;
  country:any;
  city:any;
  countryOfResidence:any;
  cityOfResidence: any;
  cityId?: number;
  cellPhone1: string;
  cellPhone2?: string;
  email?: string;
  idcardType: string;
  idCardNumber: string;
  motherFirstName: string;
  motherLastName: string;
  motherProfession?: string;
  correspondant: string;
  correspondantCellPhone: string;
  emergencyContact: string;
  emergencyContact2?: string;
  insurances;
  deathDate: string;
  solde: number;
}
