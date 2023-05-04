import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Antecedent } from '../_models/antecedent.model';
import { catchError } from 'rxjs/operators';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AntecedentService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(antecedent: Antecedent): Observable<Antecedent> {
    return this.http.post<Antecedent>(environment.baseUrl2 + '/antecedant-list/add', antecedent);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Antecedent> {
    return this.http.put<Antecedent>(environment.baseUrl2 + '/antecedant-list/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Antecedent[]> {
    return this.http.get<Antecedent[]>(environment.baseUrl2 + '/antecedant-list/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Antecedent[]> {
      let queryParams = {};

       data['active']= (data['active'] == null) ? '' : data['active'];
       data['antecedantType']= (data['antecedantType'] == null) ? '' : data['antecedantType'];


       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('antecedantType', data['antecedantType'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Antecedent[]>(environment.baseUrl2 + '/antecedant-list/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Antecedent[]> {
  return this.http.get<Antecedent[]>(environment.baseUrl2 + '/antecedant-list/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Antecedent> {
  return this.http.get<Antecedent>(environment.baseUrl2 + '/antecedant-list/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Antecedent> {
    return this.http.get<Antecedent>(environment.baseUrl2 + '/antecedant-list/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Antecedent> {
    return this.http.get<Antecedent>(environment.baseUrl2 + '/antecedant-list/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/antecedant-list/active_antecedent_lists_name');
    }

    /**
   * get a list of object
   */
  getIdAndNameByFamily(data): Observable<any> {
   
    let queryParams = {};
    data['historyFamily']= (data['historyFamily'] == null) ? '' : data['historyFamily'];


       queryParams = { params: new HttpParams().set('type', data["historyFamily"])
                                              .set('name', data['history'])
       };

       return this.http.get<any>(environment.baseUrl2 + '/antecedant-list/by-type', queryParams);
    
  }
}
