import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeMail } from '../_models/typeMail.model';

@Injectable({
  providedIn: 'root'
})
export class TypeMailService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(typeMail: TypeMail): Observable<TypeMail> {
    return this.http.post<TypeMail>(environment.baseUrl2 + '/courier-type/add', typeMail);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TypeMail> {
    return this.http.put<TypeMail>(environment.baseUrl2 + '/courier-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<TypeMail[]> {
    return this.http.get<TypeMail[]>(environment.baseUrl2 + '/courier-type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<TypeMail[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<TypeMail[]>(environment.baseUrl2 + '/courier-type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<TypeMail[]> {
  return this.http.get<TypeMail[]>(environment.baseUrl2 + '/courier-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<TypeMail> {
  return this.http.get<TypeMail>(environment.baseUrl2 + '/courier-type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<TypeMail> {
    return this.http.get<TypeMail>(environment.baseUrl2 + '/courier-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<TypeMail> {
    return this.http.get<TypeMail>(environment.baseUrl2 + '/courier-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/courier-type/active_names');
    }
}
