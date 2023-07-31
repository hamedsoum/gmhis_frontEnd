import { Act } from "src/app/act/act/models/act";
import { labelValue } from "src/app/shared/domain";
import { AuditPKDTO } from "src/app/shared/models/Audit";

export enum examenComplementaryType {
    BIOLOGYCAL_ANALYSIS = 'biologicalAnalysis',
    IMAGERY = 'imagery',
    ISOTOPIC = 'isotopic',
    MEDICAL_EXPLORATION = 'medical_exploration'
}

export const EXAMEN_COMPLEMENTARY_TYPES: labelValue[] = [
    {
        label: 'Analyses Biologiques',
        value: 'biologycal_analysis'
    },
    {
        label: 'Imagerie',
        value: 'imagery'
    },
    {
        label: 'Isotopiques',
        value: 'isotopic'
    },
    {
        label: 'Exploration Médicale',
        value: 'medical_exploration'
    }
]
export const EXAMEN_COMPLEMENTARY_TYPES_FR = ['Analyses Biologiques', "Imageries", 'Isotopique', "'exploration médicale"];

export type examenComplementaryTypeStr = 'biologicalAnalysis' | 'imagery' | 'isotopic' | 'medical_exploration';

export interface examenComplementary extends AuditPKDTO {
    id: string;

    act:  Act;

    examenComplementaryType: examenComplementaryType;

    active: boolean;

    facilityID: string;
}

export interface examenComplementaryPartial {
    id: string;

    name: string;

    actID:  string;

    examenComplementaryType: examenComplementaryType;

    active: boolean;

}

export class ExamenComplementaryCreate {
    actID: number;

    examenComplementaryType: examenComplementaryType;

    active: boolean;
}