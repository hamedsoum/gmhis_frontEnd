import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCroFamily } from '../_models/typeCroFamily.model';

@Injectable({
  providedIn: 'root'
})
export class TypeCroFamilyService {
  
  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(typeCroFamily: TypeCroFamily): Observable<TypeCroFamily> {
    return this.http.post<TypeCroFamily>(environment.baseUrl2 + '/cro-group/add', typeCroFamily);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TypeCroFamily> {
    return this.http.put<TypeCroFamily>(environment.baseUrl2 + '/cro-group/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<TypeCroFamily[]> {
    return this.http.get<TypeCroFamily[]>(environment.baseUrl2 + '/cro-group/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<TypeCroFamily[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<TypeCroFamily[]>(environment.baseUrl2 + '/cro-group/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<TypeCroFamily[]> {
  return this.http.get<TypeCroFamily[]>(environment.baseUrl2 + '/cro-group/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<TypeCroFamily> {
  return this.http.get<TypeCroFamily>(environment.baseUrl2 + '/cro-group/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<TypeCroFamily> {
    return this.http.get<TypeCroFamily>(environment.baseUrl2 + '/cro-group/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<TypeCroFamily> {
    return this.http.get<TypeCroFamily>(environment.baseUrl2 + '/cro-group/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/cro-group/active_names');
    }
}
