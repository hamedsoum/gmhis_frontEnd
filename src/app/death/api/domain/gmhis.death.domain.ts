import { Patient } from "src/app/patient/patient";
import { AuditPKDTO } from "src/app/shared/models/Audit";
import { User } from "src/app/_models";

export interface GMHISDeath extends AuditPKDTO {
    code: string;

    deathDate :string;

    deathReason: string;

    deathDeclarationBy: User;

    deathDeclarationDate: string;

    patient: Patient;
}

export interface GMHISDeathPartial {
    id: string;
	
	code: string;
	
	deathDate: string;

	deathReason: string;
	
	deathDeclarationDate: string;
	
	deathDeclaratedByName: string;
	deathDeclarationByID: number;
	
	patientFirstName: string;
	patientLastName: string;
	patientID: number;
}


export interface GMHISDeathCreateUpdate {
    id: string;
	
	code: string;
	
	deathDate: string;

	deathReason: string;
	
	deathDeclarationDate: string;
	
	deathDeclarationByID: number;

	patientID: number;
}

