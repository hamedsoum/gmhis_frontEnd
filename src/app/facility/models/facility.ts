import { AuditPKDTO } from "src/app/shared/models/Audit";

export interface Facility extends AuditPKDTO {
    active: Boolean,

    address: string,

    contact: string,

    dhisCode: String,

    email: String,

    facilityCategory: any,

    facilityCategoryId: string,

    facilityType:{active: boolean, id: string,name: string },

    facilityTypeId: string,

    id:string,

    latitude: number,

    localCode: string,

    locality: {id: string, createdAt: string, latitude: number, longitude: number, name: string,township: string, city: string, state: string},
    
    localityId: number,

    logo: string,

    longitude: number,

    name: string,

    shortName:string
}
