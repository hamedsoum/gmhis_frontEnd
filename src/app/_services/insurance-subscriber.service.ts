import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InsuranceSubscriber } from '../_models/insuranceSubscriber.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InsuranceSubscriberService {

  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(subscriber: InsuranceSubscriber): Observable<InsuranceSubscriber> {
    return this.http.post<InsuranceSubscriber>(environment.baseUrl2 + '/insurance-subscriber/add', subscriber);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<InsuranceSubscriber> {
    return this.http.put<InsuranceSubscriber>(environment.baseUrl2 + '/insurance-subscriber/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<InsuranceSubscriber[]> {
    return this.http.get<InsuranceSubscriber[]>(environment.baseUrl2 + '/insurance-subscriber/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<InsuranceSubscriber[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<InsuranceSubscriber[]>(environment.baseUrl2 + '/insurance-subscriber/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<InsuranceSubscriber[]> {
  return this.http.get<InsuranceSubscriber[]>(environment.baseUrl2 + '/insurance-subscriber/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<InsuranceSubscriber> {
  return this.http.get<InsuranceSubscriber>(environment.baseUrl2 + '/insurance-subscriber/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<InsuranceSubscriber> {
    return this.http.get<InsuranceSubscriber>(environment.baseUrl2 + '/insurance-subscriber/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<InsuranceSubscriber> {
    return this.http.get<InsuranceSubscriber>(environment.baseUrl2 + '/insurance-subscriber/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/insurance-subscriber/active_subscribers_name');
    }

}
