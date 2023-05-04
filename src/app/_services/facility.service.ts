import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facility } from '../_models/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(environment.baseUrl2 + '/facility/add', facility);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Facility> {
    return this.http.put<Facility>(environment.baseUrl2 + '/facility/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(environment.baseUrl2 + '/facility/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Facility[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Facility[]>(environment.baseUrl2 + '/facility/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Facility[]> {
  return this.http.get<Facility[]>(environment.baseUrl2 + '/facility/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Facility> {
  return this.http.get<Facility>(environment.baseUrl2 + '/facility/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Facility> {
    return this.http.get<Facility>(environment.baseUrl2 + '/facility/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(environment.baseUrl2 + '/facility/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/facility/active_facilities_name');
    }
  }
