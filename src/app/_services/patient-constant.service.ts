import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientConstant } from '../_models/patientConstant.model';

@Injectable({
  providedIn: 'root'
})
export class PatientConstantService {

  constructor(private http: HttpClient) { }

  /**
    *  POST: add a new object to the database 
    */
  save(patientConstant: PatientConstant): Observable<PatientConstant> {
    console.log('patientConstantservice');
    
    console.log(patientConstant);
    
    return this.http.post<PatientConstant>(environment.baseUrl2 + '/patient_constant/add', patientConstant);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(PatientConstant: PatientConstant): Observable<PatientConstant> {
    return this.http.put<PatientConstant>(environment.baseUrl2 + '/patient_constant/update/' + PatientConstant.id, PatientConstant);
  }

  /**
     * get object by id
     * @param id 
     */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/patient_constant/detail/' + id);
  }

  /**
     * get a list of object
     */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/patient_constant/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<any[]> {
    let queryParams = {};

let newDate ="";
if (data.date != "") {
  let date = data.date.split("-");
   newDate = date[2] + '-' + date[1] + '-' + date[0];
}
    queryParams = {
      params: new HttpParams().set('patientId', data['patientId'])
        .set('date', newDate)
        .set('page', data['page'])
        .set('size', data['entries'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/patient_constant/p_list', queryParams);
  }

  /**
   * get object by patient id
   * @param patientId 
   */
  findByPatientId(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/patient_constant/find-by-patient/' + patientId);
  }

}
