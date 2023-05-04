import { User } from './user.model';

export interface TypeMail{
    id: number;
    name: string;
    text: string;
    active: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}