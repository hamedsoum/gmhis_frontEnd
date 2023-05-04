import { User } from './user.model';

export interface Country {
    id: number;
    name: string;
    isoCode: string;
    shortName: string;
    createdAt: Date;
}