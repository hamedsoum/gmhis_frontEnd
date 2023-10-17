export enum GMHISPatientType {
  CASH_PATIENT = 'Comptant',
  INSURED_PATIENT = 'Assuré'
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
  city:any;
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
}
