import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCro } from '../_models/typeCro.model';

@Injectable({
  providedIn: 'root'
})
export class TypeCroService {

  
  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(typeCro: TypeCro): Observable<TypeCro> {
    return this.http.post<TypeCro>(environment.baseUrl2 + '/cro-type/add', typeCro);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TypeCro> {
    return this.http.put<TypeCro>(environment.baseUrl2 + '/cro-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<TypeCro[]> {
    return this.http.get<TypeCro[]>(environment.baseUrl2 + '/cro-type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<TypeCro[]> {
      let queryParams = {};

       data['active']= (data['active'] == null) ? '' : data['active'];
       data['croGroup']= (data['croGroup'] == null) ? '' : data['croGroup'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('croGroup', data['croGroup'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<TypeCro[]>(environment.baseUrl2 + '/cro-type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<TypeCro[]> {
  return this.http.get<TypeCro[]>(environment.baseUrl2 + '/cro-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<TypeCro> {
  return this.http.get<TypeCro>(environment.baseUrl2 + '/cro-type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<TypeCro> {
    return this.http.get<TypeCro>(environment.baseUrl2 + '/cro-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<TypeCro> {
    return this.http.get<TypeCro>(environment.baseUrl2 + '/cro-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/cro-type/active_names');
    }
}
