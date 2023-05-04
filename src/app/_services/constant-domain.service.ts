import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConstantDomain } from '../_models/constantDomain.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantDomainService {
 
  constructor( private http: HttpClient) { }
  
  /**
   *  POST: add a new object to the database 
   */
  save(constantDomain: ConstantDomain): Observable<ConstantDomain> {
    return this.http.post<ConstantDomain>(environment.baseUrl2 + '/constant_domain/add', constantDomain);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ConstantDomain> {
    return this.http.put<ConstantDomain>(environment.baseUrl2 + '/constant_domain/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<ConstantDomain[]> {
    return this.http.get<ConstantDomain[]>(environment.baseUrl2 + '/constant_domain/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<ConstantDomain[]> {
      let queryParams = {};

       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<ConstantDomain[]>(environment.baseUrl2 + '/constant_domain/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<ConstantDomain[]> {
  return this.http.get<ConstantDomain[]>(environment.baseUrl2 + '/constant_domain/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<ConstantDomain> {
  return this.http.get<ConstantDomain>(environment.baseUrl2 + '/constant_domain/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<ConstantDomain> {
    return this.http.get<ConstantDomain>(environment.baseUrl2 + '/constant_domain/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<ConstantDomain> {
    return this.http.get<ConstantDomain>(environment.baseUrl2 + '/constant_domain/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/constant_domain/active_names');
    }
}
