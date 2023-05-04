import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Practician } from '../_models/practician.model';

@Injectable({
  providedIn: 'root'
})
export class PracticianService {

  constructor(private http: HttpClient) { }


  /**
   *  POST: add a new object to the database 
   */
  save(practician){
    return this.http.post<any>(environment.baseUrl2 + '/practician/add',  practician  );
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Practician> {

    return this.http.put<Practician>(environment.baseUrl2 + '/practician/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll() {
    return this.http.get<any[]>(environment.baseUrl2 + '/practician/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data) : Observable<any[]>{
    let queryParams = {};

    data['service'] = (data['service'] == null) ? '' : data['service'];
    data['speciality'] = (data['speciality'] == null) ? '' : data['speciality'];
    data['active'] = (data['active'] == null) ? '' : data['active'];

    queryParams = {
      params: new HttpParams().set('firstName', data['firstName'])
        .set('lastName', data['lastName'])
        .set('phoneContact', data['phoneContact'])
        .set('practicianNumber', data['practicianNumber'])
        .set('speciality', data['speciality'])
        .set('service', data['service'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])
        .set('page', data['page'])
        .set('size', data['entries'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/practician/p_list', queryParams);
  }

  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/practician/active_list');

  }

  /**
   * enable a object
   */
  enable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/practician/enable/' + id);

  }

  /**
   * disable a object
   */
  disable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/practician/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/practician/detail/' + id);
  }

/**
   * get collection of practician  by service
   * @param service 
   */
  findByService(service: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/practician/find-by-service/' + service);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/practician/active_practicians_name');
  }
}
