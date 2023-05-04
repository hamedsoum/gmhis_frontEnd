import { Insured } from './insured.model';
import { User } from './user.model';

export interface Insurance {
    id: number;
    name: string;
    code: string;
    address: string;
    account: string;
    active: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
    deleted: string;
    deletedAt: Date;
    deletedBy: User;
    // InsuranceType:  insuranceType;
    insureds: Insured[];
}