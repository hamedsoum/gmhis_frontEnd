import { User } from './user.model';

export interface LaboratoryAnalysis {
    id: number;
    name: string;
    active: string;
    // category: 
    price: number;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}