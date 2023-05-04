import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Speciality } from '../_models/speciality.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor( private http: HttpClient) { }

   
  /**
   *  POST: add a new object to the database 
   */
  save(speciality: Speciality): Observable<Speciality> {
    return this.http.post<Speciality>(environment.baseUrl2 + '/speciality/add', speciality);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Speciality> {
    return this.http.put<Speciality>(environment.baseUrl2 + '/speciality/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(environment.baseUrl2 + '/speciality/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Speciality[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Speciality[]>(environment.baseUrl2 + '/speciality/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Speciality[]> {
  return this.http.get<Speciality[]>(environment.baseUrl2 + '/speciality/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Speciality> {
  return this.http.get<Speciality>(environment.baseUrl2 + '/speciality/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Speciality> {
    return this.http.get<Speciality>(environment.baseUrl2 + '/speciality/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Speciality> {
    return this.http.get<Speciality>(environment.baseUrl2 + '/speciality/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/speciality/active_specialities_name');
    }

}
