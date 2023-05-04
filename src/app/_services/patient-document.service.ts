import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { patientDocument } from '../_models/patientDodument.model';

@Injectable({
  providedIn: 'root'
})
export class PatientDocumentService {
  
  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(document: patientDocument): Observable<patientDocument> {
    return this.http.post<patientDocument>(environment.baseUrl2 + '/patient-document/add', document);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<patientDocument> {
    return this.http.put<patientDocument>(environment.baseUrl2 + '/patient-document/update/' + data.id, data);
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<patientDocument[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('patientId', data['patientId'])
        .set('type', data['type'])
        .set('page', data['page'])
    };

    return this.http.get<patientDocument[]>(environment.baseUrl2 + '/patient-document/p_list', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<patientDocument> {
    return this.http.get<patientDocument>(environment.baseUrl2 + '/patient-document/detail/' + id);
  }
}
