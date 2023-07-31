export enum admissionStatus {
   UNBILLED = 'R',
   BILLED = 'B',
}

export enum admissionStatusStr{
    
}

export interface Admission {
    id: number;

    practicianId: number;
    practician : string;

    UpdatedByFirstName: string;
    UpdatedByLastName: string;
    UpdatedByLogin: string;

    act: string;
    actCost: number;
    actId : number;

    admissionDate: Date;
    admissionNumber: string;
    admissionStatus: string;

    createdAt: Date;

    createdByFirstName: string;
    createdByLastName: string;
    createdByLogin: string;

    patientExternalId: number;
    patientFirstName: string;
    patientId: number;
    patientType: Boolean;
    patientLastName: string;
    patientMaidenName: string;

    service: string;

    updatedAt: Date;

    facilityType: string;

    takeCare: boolean;
    takeCareByName?: string;
    takeCareAt?: string;

    supervisoryNumber : number;
    supervisoryLastDate: number;
}

export interface admissionCreateUpdate {
    id: number;

	createdAt : Date;

	patient: number;

	speciality?: number;

	act?: number;

	practician?: number;

	caution?: number;

	takeCare?: number;
}



