import { ActCategory } from './actCategory.model';
import { ActCode } from './actCode.model';
import { ActFamily } from './actFamily.model';

export interface Act{
    id: number;
    coding: string;
    name: string;
    coefficient: number;
    codeActe: ActCode;
    category: ActCategory;
    unitPrice: number;
    family: ActFamily;
    active: string;
  
}