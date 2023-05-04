import { User } from './user.model';

export interface Service {
    id: number;
    name: string;
    active: string;
    createdAt: Date;
    createdBy: number;
    createdByUser: User;
    updatedAt: Date;
    updtedBy: number;
    updatedByUser: User;
  
}