import { logging } from "protractor";
import { IExamination } from "src/app/medical-folder/examination/models/examination";
import { Patient } from "src/app/patient/patient";
import { Practician } from "src/app/practician/practician";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { GMHISName } from "src/app/shared/models/gmhis-domain";

export interface GMHISHospitalizationRequest extends AuditPKDTO {
    id: string;
	
	code: string;

    patient : Patient;

    Practician: Practician;

    reason: string;

    dayNumber: number;
}


export interface GMHISHospitalizationRequestPartial {

    id: string;
	
	code: string;

    patientName: GMHISName;
    patientID: number;

    praticianName: GMHISName;

    date: string;
    
    reason: string;

    dayNumber: number;

    startDate: string;

    examination: IExamination;
}

export interface GMHISHospitalizationRequestCreate {
    examinationID: number;

    patientID: number;

    reason: string;

    dayNumber: number;

    startDate: string;
}