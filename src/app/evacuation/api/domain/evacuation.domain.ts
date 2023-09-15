import { ActCategory } from "src/app/act/category/actCategory.model";
import { Facility } from "src/app/facility/models/facility";
import { Patient } from "src/app/patient/patient";
import { Practician } from "src/app/practician/practician";
import { User } from "src/app/_models";

export interface GMHISEvacuation {
    evacuationFacility: Facility;

    startDate: string;

    service: ActCategory;

    practician: Practician;

    patient: Patient;

    evacuationReason: string;

    clinicalInformation?: string;

    treatmentReceived?: string;

    receptionFacility: Facility;

    createdAt: string;

    createdBy: User;

    updatededAt: string;

    updatedBy: User;
}

export interface GMHISEvacuationPartial {
    id: string;
	 
	evacuationFacilityName: string;
	
	startDate: string;
	
	service: string;
	
	practicianName: string;
	
	patientName: string;
	
	evacuationReason: string;
	
	clinicalInformation: string;
	
	treatmentReceived: string;
	
	receptionFacilityName: string;
}

export interface GMHISEvacuationCreateUpdate {
   evacuationFacilityID: string;

	startDate: string;

    serviceID: number;

	PracticianID: number;

	PatientID: number;

	evacuationReason: string;

	clinicalInformation?: string;

	treatmentReceived?: string;

	receptionFacilityID: string;
}