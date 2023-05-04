import { User } from './user.model';

export interface ActCode {
    id: number;
    name: string;
    value: number;
    active: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}