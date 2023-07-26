import { AuditPKDTO } from "src/app/shared/models/Audit";
import { User } from "src/app/_models";

export interface Cashier extends AuditPKDTO {
    id: string;
    user: User;
    userID: number;
    active: boolean;
}

export interface CashierCreate {
    id: string;
    userID: number;
    active: boolean;
}

export interface CashierPartial {
    active: boolean;
    firstName: string;
    lastName: string;
}