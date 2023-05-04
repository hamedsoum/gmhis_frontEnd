import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AntecedentFamily } from '../_models/antecedentFamily';

@Injectable({
  providedIn: 'root'
})
export class AntecedentFamilyService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(antecedentFamily: AntecedentFamily): Observable<AntecedentFamily> {
    return this.http.post<AntecedentFamily>(environment.baseUrl2 + '/antecedant-type/add', antecedentFamily);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<AntecedentFamily> {
    return this.http.put<AntecedentFamily>(environment.baseUrl2 + '/antecedant-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<AntecedentFamily[]> {
    return this.http.get<AntecedentFamily[]>(environment.baseUrl2 + '/antecedant-type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<AntecedentFamily[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<AntecedentFamily[]>(environment.baseUrl2 + '/antecedant-type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<AntecedentFamily[]> {
  return this.http.get<AntecedentFamily[]>(environment.baseUrl2 + '/antecedant-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<AntecedentFamily> {
  return this.http.get<AntecedentFamily>(environment.baseUrl2 + '/antecedant-type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<AntecedentFamily> {
    return this.http.get<AntecedentFamily>(environment.baseUrl2 + '/antecedant-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<AntecedentFamily> {
    return this.http.get<AntecedentFamily>(environment.baseUrl2 + '/antecedant-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/antecedant-type/active_antecedant_types_name');
    }
}
