import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../_models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  
  
  /**
  *  POST: add a new object to the database 
  */
 save(patient: Patient): Observable<Patient> {
  return this.http.post<Patient>(environment.baseUrl2 + '/patient/add', patient);
}

/** 
 * PUT: update the object on the server. Returns the updated objet upon success. 
 */
update(patient: Patient): Observable<Patient> {
  return this.http.put<Patient>(environment.baseUrl2 + '/patient/update/' + patient.id, patient);
}

/**
 * get a list of object
 */
findAll(data: object): Observable<any[]> {
 
 let queryParams = {};

   queryParams = { params: new HttpParams().set('page', data['page'])
                                           .set('size', data['entries'])
                                           .set('cnamNumber', data['cnamNumber'])
                                           .set('idCardNumber', data['idCardNumber'])
                                           .set('firstName', data['firstName'])
                                           .set('lastName', data['lastName'])
                                           .set('patientExternalId', data['patientExternalId'])
                                           .set('cellPhone', data['cellPhone'])
                                           .set('sort', data['sort']+','+data['order'])
                };

 return this.http.get<any[]>(environment.baseUrl2 + '/patient/p_list', queryParams);

}

/**
 * get only id an name  of all objects
 */
getIdAndName(): Observable<any[]> {
 return this.http.get<any[]>(environment.baseUrl2 + '/patient/names');

}


/**
 * get object by id
 * @param id 
 */
findById(id: number): Observable<any> {
  return this.http.get<any>(environment.baseUrl2 + '/patient/detail/' + id);
}

  
}
