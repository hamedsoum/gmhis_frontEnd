import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultation } from '../_models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {


  constructor(
    private http: HttpClient
  ) { }

  /**
   *  POST: add a new object to the database 
   */
  save(consultaion: Consultation): Observable<Consultation> {
    return this.http.post<Consultation>(environment.baseUrl2 + '/examination/add', consultaion);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(consultation: Consultation): Observable<Consultation> {
    return this.http.put<Consultation>(environment.baseUrl2 + '/examination/update/' + consultation.id, consultation);
  }

  /**
   * get a list of object
   */
  findAllPatientConsultations(data): Observable<any[]> {
    let queryParams = {};
  
    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('patient', data['patient'])
        .set('size', data['size'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/examination/p_list/by_patient/', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Consultation> {
    return this.http.get<Consultation>(environment.baseUrl2 + '/examination/detail/' + id);
  }

}
