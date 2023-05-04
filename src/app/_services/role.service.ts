import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../_models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(role: Role): Observable<Role> {
    return this.http.post<Role>(environment.baseUrl2 + '/role/add', role);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Role> {
    return this.http.put<Role>(environment.baseUrl2 + '/role/update/' + data.roleDTO.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(environment.baseUrl2 + '/role/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Role[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Role[]>(environment.baseUrl2 + '/role/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Role[]> {
  return this.http.get<Role[]>(environment.baseUrl2 + '/role/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Role> {
  return this.http.get<Role>(environment.baseUrl2 + '/role/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Role> {
    return this.http.get<Role>(environment.baseUrl2 + '/role/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Role> {
    return this.http.get<Role>(environment.baseUrl2 + '/role/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/role/active_roles_name');
    }

}
