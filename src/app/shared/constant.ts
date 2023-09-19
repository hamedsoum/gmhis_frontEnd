export class Constant {
    public readonly DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE = 7;
}

export enum userRoles {
    SUPER_ADMIN = 'super admin',
    CASHIER = 'caissier',
    PRACTICIAN = 'practicien',
    NURSE = 'Infirmier(e)',
    LABORATORY_TECHNICIEN = 'Laboratory technician',
    PHARMACIST = 'Pharmacist',
    HOME = 'Accueil'
}

export const PAGINATION_SIZE = [
    { id: 10, value: 10 },
    { id: 25, value: 25 },
    { id: 50, value: 50 },
    { id: 100, value: 100 },
    { id: 250, value: 250 },
    { id: 500, value: 500 },
    { id: 1000, value: 1000 },
  ];

export const PAGINATION_DEFAULT_SIZE =  50;