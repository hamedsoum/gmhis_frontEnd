import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentTreatment } from '../_models/currentTreatment.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentTreatmentService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  POST: add a new object to the database 
   */
  save(currentTreatment : CurrentTreatment): Observable<CurrentTreatment> {
    return this.http.post<CurrentTreatment>(environment.baseUrl2 + '/current-treatment/add', currentTreatment);
  }

  /**
   * get object by id
   * @param patient_id 
   */
  findByPatientId(patient_id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/current-treatment/detail/' + patient_id);
  }
}
