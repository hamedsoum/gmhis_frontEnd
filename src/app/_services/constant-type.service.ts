import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstantType } from '../_models/constantType.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantTypeService {

  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(constantType: ConstantType): Observable<ConstantType> {
    return this.http.post<ConstantType>(environment.baseUrl2 + '/patient-constant-type/add', constantType);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ConstantType> {
    return this.http.put<ConstantType>(environment.baseUrl2 + '/patient-constant-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/patient-constant-type/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<any[]> {
    let queryParams = {};
    data['active'] = (data['active'] == null) ? '' : data['active'];
    data['domain'] = (data['domain'] == null) ? '' : data['domain'];

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('name', data['name'])
        .set('domain', data['domain'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/patient-constant-type/p_list', queryParams);
  }

  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/patient-constant-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/patient-constant-type/enable/' + id);

  }

  /**
   * disable a object
   */
  disable(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/patient-constant-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/patient-constant-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/patient-constant-type/active_constant_types_name');
  }

  /**
   * Ajouter des options pour une constante type 
   * 
   */
  setConstantOption(option): Observable<any> {
    return this.http.post<any>(environment.baseUrl2 + '/patient-constant-type/add_values/' + option[0].constantType, option);
  }


  /**
   * 
   * Retirer des valeurs possibles pour une constante type
   */
  removeConstantOption(option): Observable<any> {
    return this.http.post<any>(environment.baseUrl2 + '/patient-constant-type/remove_values/' + option[0].id, option);
  }

  /**
  * get a list of active constant types by domain
  */
  findActiveByDomain(domainId: number): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/patient-constant-type/active_constant_types_name/dom/' + domainId);
  }
}
