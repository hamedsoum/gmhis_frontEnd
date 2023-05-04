import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Allergy } from '../_models/allergy.model';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  POST: add a new object to the database 
   */
  save(allergy : Allergy): Observable<Allergy> {
    return this.http.post<Allergy>(environment.baseUrl2 + '/allergy/add', allergy);
  }

  /**
   * get object by id
   * @param patient_id 
   */
  findByPatientId(patient_id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/allergy/detail/' + patient_id);
  }
}
