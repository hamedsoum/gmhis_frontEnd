import { Act } from "src/app/act/act/models/act";
import { labelValue } from "src/app/shared/domain";
import { AuditPKDTO } from "src/app/shared/models/Audit";

export enum ExamenComplementaryType {
    BIOLOGICAL_ANALYSIS = 'biological_Analysis',
    IMAGERY = 'imagery',
    ISOTOPIC = 'isotopic',
    MEDICAL_EXPLORATION = 'medical_exploration'
}

export const DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE = 7;


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

export type ExamenComplementaryTypeStr = 'biological_Analysis' | 'imagery' | 'isotopic' | 'medical_exploration';

export interface ExamenComplementary extends AuditPKDTO {
    id: string;

    act: Act;
    actName: string;

    actID: number;

    examenComplementaryType: ExamenComplementaryType | ExamenComplementaryTypeStr;

    active: boolean;

    facilityID: string;

    medicalAnalysisName: string;

    medicalAnalysisID: string;
}

export interface ExamenComplementaryPartial {
    id: string;

    name: string;

    actID:  string;

    examenComplementaryType: ExamenComplementaryType;

    active: boolean;

}

export class ExamenComplementaryCreate {
    actID: number;

    examenComplementaryType: ExamenComplementaryType;

    active: boolean;
}