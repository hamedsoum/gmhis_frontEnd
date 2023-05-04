import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActCategory } from '../_models/actCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ActCategoryService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(actCategory: ActCategory): Observable<ActCategory> {
    return this.http.post<ActCategory>(environment.baseUrl2 + '/act-category/add', actCategory);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ActCategory> {
    return this.http.put<ActCategory>(environment.baseUrl2 + '/act-category/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/act-category/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<any[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<any[]>(environment.baseUrl2 + '/act-category/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
  return this.http.get<any[]>(environment.baseUrl2 + '/act-category/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<any> {
  return this.http.get<any>(environment.baseUrl2 + '/act-category/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act-category/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/act-category/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/act-category/active_categories_name');
    }

}
