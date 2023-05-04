import { User } from './user.model';

export interface PatientHistory {
    description: string,
    familyHistories: string,
    id: number,
    medicalHistories: string,
    patient: number,
    surgicalHistories: string
}