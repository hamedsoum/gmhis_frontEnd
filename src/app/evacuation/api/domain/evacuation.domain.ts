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
    evacuationFacilityID: string;

	startDate: string;
	
	service: string;
    serviceID: number;

	practicianName: string;
    practicianID: number;

	patientName: string;
    patientID: number;

	evacuationReason: string;
	
	clinicalInformation: string;
	
	treatmentReceived: string;
	
	receptionFacilityName: string;
    receptionFacilityID: string;

}

export interface GMHISEvacuationCreateUpdate {
   evacuationFacilityID: string;

	startDate: string;

    serviceID: number;

	practicianID: number;

	patientID: number;

	evacuationReason: string;

	clinicalInformation?: string;

	treatmentReceived?: string;

	receptionFacilityID: string;
}