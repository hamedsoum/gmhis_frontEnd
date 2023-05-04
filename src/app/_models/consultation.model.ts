import { User } from './user.model';

export interface Consultation {
  admission: number,
  conclusion: string,
  endDate: Date,
  examinationReasons: string,
  examinationType: string,
  facility: number,
  history: string,
  id: number,
  pathologies: string,
  pratician: number,
  startDate: Date
} 