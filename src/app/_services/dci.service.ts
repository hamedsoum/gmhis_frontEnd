import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dci } from '../_models/dci.model';

@Injectable({
  providedIn: 'root'
})
export class DciService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(dci: Dci): Observable<Dci> {
    return this.http.post<Dci>(environment.baseUrl2 + '/dcn/add', dci);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Dci> {
    return this.http.put<Dci>(environment.baseUrl2 + '/dcn/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Dci[]> {
    return this.http.get<Dci[]>(environment.baseUrl2 + '/dcn/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Dci[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Dci[]>(environment.baseUrl2 + '/dcn/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Dci[]> {
  return this.http.get<Dci[]>(environment.baseUrl2 + '/dcn/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Dci> {
  return this.http.get<Dci>(environment.baseUrl2 + '/dcn/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Dci> {
    return this.http.get<Dci>(environment.baseUrl2 + '/dcn/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Dci> {
    return this.http.get<Dci>(environment.baseUrl2 + '/dcn/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/dcn/active_name');
    }
}
