import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActCode } from '../_models/actCode.model';

@Injectable({
  providedIn: 'root'
})
export class ActCodeService {
  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(actCode: ActCode): Observable<ActCode> {
    return this.http.post<ActCode>(environment.baseUrl2 + '/act-code/add', actCode);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ActCode> {
    return this.http.put<ActCode>(environment.baseUrl2 + '/act-code/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/act-code/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<any[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<any[]>(environment.baseUrl2 + '/act-code/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
  return this.http.get<any[]>(environment.baseUrl2 + '/act-code/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<any> {
  return this.http.get<any>(environment.baseUrl2 + '/act-code/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act-code/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act-code/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/act-code/active_codes_name');
    }

}
