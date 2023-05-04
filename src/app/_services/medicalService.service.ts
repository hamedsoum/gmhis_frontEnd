import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Service} from "./../_models/service.model";
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class medicalServiceService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(service: Service): Observable<Service> {
    return this.http.post<Service>(environment.baseUrl2 + '/service/add', service);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Service> {
    return this.http.put<Service>(environment.baseUrl2 + '/service/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(environment.baseUrl2 + '/service/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Service[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Service[]>(environment.baseUrl2 + '/service/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Service[]> {
  return this.http.get<Service[]>(environment.baseUrl2 + '/service/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Service> {
  return this.http.get<Service>(environment.baseUrl2 + '/service/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Service> {
    return this.http.get<Service>(environment.baseUrl2 + '/service/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Service> {
    return this.http.get<Service>(environment.baseUrl2 + '/service/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/service/active_services_name');
    }


}