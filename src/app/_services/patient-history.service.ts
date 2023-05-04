import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientHistory } from './../_models/patientHistory.model'


@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService {
  
  constructor(
    private http: HttpClient
  ) { }

  /**
   *  POST: add a new object to the database 
   */
  save(history : PatientHistory): Observable<PatientHistory> {
    return this.http.post<PatientHistory>(environment.baseUrl2 + '/antecedant/add', history);
  }

  /**
   * get object by id
   * @param patient_id 
   */
  findByPatientId(patient_id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/antecedant/detail/' + patient_id);
  }
}
