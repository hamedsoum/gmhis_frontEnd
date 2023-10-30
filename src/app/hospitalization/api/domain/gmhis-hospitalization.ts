import { Patient } from "src/app/patient/patient";
import { Practician } from "src/app/practician/practician";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";

export interface GMHISHospitalization extends AuditPKDTO {
    id: string;
	
	code: string;

    patient : Patient;

    Practician: Practician;

    reason: string;

    bedroom: string;

    protcole: string;

    start: string,

    end: String;

    status: string;

}


export interface GMHISHospitalizationPartial {

    id: string;
	
	code: string;

    patientName: GMHISName;

    practicianName: GMHISName;

    reason: string;

    bedroom: string;

    protcole: string;

    start: string,

    end: string;

    status: string;

    conclusion: string;

}

export interface GMHISHospitalizationCreate {
    patientID?: number;

    practicianID?: number;

    reason?: string;

    bedroom?: string;

    start?: string;

    end?: string;

    protocole?: string;

    conclusion?: string;
}

export enum GMHISHospitalizationStatus {
    IN_PROGRESS = 'in_progress',
    FINISHED = 'finished'
}
