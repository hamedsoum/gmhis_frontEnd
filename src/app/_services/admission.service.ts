import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Admission } from '../_models/admission.model';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  /**
    *  POST: add a new object to the database 
    */
  save(admission: Admission): Observable<Admission> {
    return this.http.post<Admission>(environment.baseUrl2 + '/admission/add', admission);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(admission: Admission): Observable<Admission> {
    return this.http.put<Admission>(environment.baseUrl2 + '/admission/update/' + admission.id, admission);
  }

  /** 
   * DELETE: delete the hero from the server 
   */
  delete(id: number): Observable<any> {
    return this.http.delete<any>(environment.baseUrl2 + '/admission/delete/' + id);
  }

  /**
   * get a list of object
   */
  findAll(data: object): Observable<any[]> {

    let queryParams = {};
    data['practician']= (data['practician'] == null) ? '' : data['practician'];
    data['service']= (data['service'] == null) ? '' : data['service'];
    data['act']= (data['act'] == null) ? '' : data['act'];

    queryParams = {
      params: new HttpParams().set('admissionNumber', data['admissionNumber'])
      .set('firstName', data['firstName'])
      .set('lastName', data['lastName'])
      .set('patientExternalId', data['patientExternalId'])
      .set('cellPhone', data['cellPhone'])
      .set('cnamNumber', data['cnamNumber'])
      .set('idCardNumber', data['idCardNumber'])
      .set('practician', data['practician'])
      .set('service', data['service'])
      .set('act', data['act'])
      .set('fromDate', data['fromDate'])
      .set('toDate', data['toDate'])
      .set('admissionStatus', data['admissionStatus'])
      .set('size', data['size'])
      .set('page', data['page'])
      .set('sort', data['sort'] + ',' + data['order'])
    };

    return this.http.get<any[]>(environment.baseUrl2 + '/admission/p_list', queryParams);

  }


  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/admission/detail/' + id);
  }


  /**
  * add a invoice
  */
  saveInvoice(data: object) {
    return this.http.post(environment.baseUrl + '/admission/invoice/add', data);
  }


   /**
   * get a list of object
   */
  findAdmissionQueue(data: object): Observable<any[]> {

    let queryParams = {};
    data['practician']= (data['practician'] == null) ? '' : data['practician'];
    data['service']= (data['service'] == null) ? '' : data['service'];
    data['act']= (data['act'] == null) ? '' : data['act'];
    data['waitingRoom']= (data['waitingRoom'] == null) ? '' : data['waitingRoom'];

    queryParams = {
      params: new HttpParams().set('admissionNumber', data['admissionNumber'])
      .set('firstName', data['firstName'])
      .set('lastName', data['lastName'])
      .set('patientExternalId', data['patientExternalId'])
      .set('cellPhone', data['cellPhone'])
      .set('cnamNumber', data['cnamNumber'])
      .set('idCardNumber', data['idCardNumber'])
      .set('practician', data['practician'])
      .set('service', data['service'])
      .set('act', data['act'])
      .set('fromDate', data['fromDate'])
      .set('toDate', data['toDate'])
      .set('waitingRoom', data['waitingRoom'])
      .set('size', data['size'])
      .set('page', data['page'])
      .set('sort', data['sort'] + ',' + data['order'])
    };

    return this.http.get<any[]>(environment.baseUrl2 + '/admission/queue/p_list', queryParams);

  }

}