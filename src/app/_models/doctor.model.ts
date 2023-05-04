import { Service } from "./../_models/service.model";
import { Speciality } from "./speciality.model";

export interface Doctor {
    id: number; 
    name : string;
    serviceId: number;
    service : Service;
    specialtyId: number;
    specialty: Speciality;
}