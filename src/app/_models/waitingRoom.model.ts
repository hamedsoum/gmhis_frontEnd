import { User } from './user.model';

export interface WaitingRoom {
    id: number;
    name: string;
    active: string;
    capacity: number;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}