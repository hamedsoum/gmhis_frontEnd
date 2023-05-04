import { User } from './user.model';

export interface ActFamily {
    id: number;
    name: string;
    active: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}