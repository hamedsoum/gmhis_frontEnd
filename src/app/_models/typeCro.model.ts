import { User } from './user.model';

export interface TypeCro {
    id: number;
    name: string;
    active: string;
    text: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}