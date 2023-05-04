import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboratory } from '../_models/laboratory.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(laboratory: Laboratory): Observable<Laboratory> {
    return this.http.post<Laboratory>(environment.baseUrl2 + '/laboratory/add', laboratory);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Laboratory> {
    return this.http.put<Laboratory>(environment.baseUrl2 + '/laboratory/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Laboratory[]> {
    return this.http.get<Laboratory[]>(environment.baseUrl2 + '/laboratory/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Laboratory[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Laboratory[]>(environment.baseUrl2 + '/laboratory/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Laboratory[]> {
  return this.http.get<Laboratory[]>(environment.baseUrl2 + '/laboratory/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Laboratory> {
  return this.http.get<Laboratory>(environment.baseUrl2 + '/laboratory/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Laboratory> {
    return this.http.get<Laboratory>(environment.baseUrl2 + '/laboratory/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Laboratory> {
    return this.http.get<Laboratory>(environment.baseUrl2 + '/laboratory/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/laboratory/active_name');
    }
}
