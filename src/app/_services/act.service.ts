import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Act } from '../_models/act.model';

@Injectable({
  providedIn: 'root'
})
export class ActService {


  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(act: Act): Observable<Act> {
    return this.http.post<Act>(environment.baseUrl2 + '/act/add', act);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Act> {
    return this.http.put<Act>(environment.baseUrl2 + '/act/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/act/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<any[]> {
    let queryParams = {};
    data['active'] = (data['active'] == null) ? '' : data['active'];

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('name', data['name'])
        .set('coding', data['coding'])
        .set('coefficient', data['coefficient'])
        .set('codeActe', data['codeActe'])
        .set('category', data['category'])
        .set('family', data['family'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/act/p_list', queryParams);
  }

  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/act/active_list');

  }

  /**
   * enable a object
   */
  enable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act/enable/' + id);

  }

  /**
   * disable a object
   */
  disable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act/active_acts_name');
  }

  /**
    * get object by criteria
    * 
    */
  findByCriteria(data): Observable<any[]> {
    let queryParams = {};
    data['category'] = (data['category'] == null) ? '' : data['category'];
    data['family'] = (data['family'] == null) ? '' : data['family'];

    queryParams = {
      params: new HttpParams().set('name', data['name'])
        .set('category', data['category'])
        .set('group', data['family'])
    };

    return this.http.get<any[]>(environment.baseUrl2 + '/act/active_by_criteria', queryParams);
  }

  /**
   * get object by bill id
   * @param id 
   */
  findByBill(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act/find-by-bill/' + id);
  }

}
