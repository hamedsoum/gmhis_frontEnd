import { User } from './user.model';

export interface Permission {
       actionUrl: string;
       code: string;
       createdAt: Date;
       createdBy: User;
       id: number;
       name: string;
       roles: [];
       updatedAt: Date;
       updatedBy: User;
}