export enum admissionStatus {
   UNBILLED = 'R',
   BILLED = 'B',
}

export enum admissionStatusStr{
    
}

export interface IAdmission {
    UpdatedByFirstName: string,
    UpdatedByLastName: string,
    UpdatedByLogin: string,
    act: string,
    actCost: number,
    admissionDate: Date,
    admissionNumber: string,
    admissionStatus: string,
    createdAt: Date,
    createdByFirstName: string,
    createdByLastName: string,
    createdByLogin: string,
    id: number,
    patientExternalId: number,
    patientFirstName: string,
    patientId: number,
    patientType: Boolean,
    patientLastName: string,
    patientMaidenName: string,
    practicianFirstName: string,
    practicianLastName: string,
    service: string,
    updatedAt: Date,
    facilityType: string,
}



