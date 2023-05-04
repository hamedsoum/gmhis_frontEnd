import { User } from './user.model';

export interface ActCategory {
    id: number;
    name: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}