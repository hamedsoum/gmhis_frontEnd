export interface Insured {
    UpdatedByFirstName: string;
    UpdatedByLastName: string;
    UpdatedByLogin: string;
    active: boolean;
    cardNumber: string
    coverage: number;
    createdAt: string;
    createdByFirstName: string;
    createdByLastName: string;
    createdByLogin: string;
    deleted: boolean;
    id: number;
    insuranceId: number;
    insuranceName: string;
    isPrincipalInsured: string;
    patientFirstName: string;
    patientId: number;
    patientLastName: string;
    principalInsuredAffiliation: boolean;
    principalInsuredContact: number;
    principalInsuredName: string;
    society: string;
    subscriberId: number;
    subscriberName: string;
    updatedAt: string;
}