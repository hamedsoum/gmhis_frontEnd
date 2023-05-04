import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dcu } from '../_models/dcu.model';

@Injectable({
  providedIn: 'root'
})
export class DcuService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(dcu: Dcu): Observable<Dcu> {
    return this.http.post<Dcu>(environment.baseUrl2 + '/dcu/add', dcu);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Dcu> {
    return this.http.put<Dcu>(environment.baseUrl2 + '/dcu/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Dcu[]> {
    return this.http.get<Dcu[]>(environment.baseUrl2 + '/dcu/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Dcu[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Dcu[]>(environment.baseUrl2 + '/dcu/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Dcu[]> {
  return this.http.get<Dcu[]>(environment.baseUrl2 + '/dcu/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Dcu> {
  return this.http.get<Dcu>(environment.baseUrl2 + '/dcu/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Dcu> {
    return this.http.get<Dcu>(environment.baseUrl2 + '/dcu/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Dcu> {
    return this.http.get<Dcu>(environment.baseUrl2 + '/dcu/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/dcu/active_name');
    }
}
