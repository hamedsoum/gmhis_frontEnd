import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Insurance } from '../_models/insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(insurance: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(environment.baseUrl2 + '/insurance/add', insurance);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Insurance> {
    return this.http.put<Insurance>(environment.baseUrl2 + '/insurance/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(environment.baseUrl2 + '/insurance/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Insurance[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Insurance[]>(environment.baseUrl2 + '/insurance/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Insurance[]> {
  return this.http.get<Insurance[]>(environment.baseUrl2 + '/insurance/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Insurance> {
  return this.http.get<Insurance>(environment.baseUrl2 + '/insurance/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Insurance> {
    return this.http.get<Insurance>(environment.baseUrl2 + '/insurance/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(environment.baseUrl2 + '/insurance/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/insurance/active_insurances_name');
    }


}
