import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Uom } from '../_models/unitOfMeasure.model';

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasureService {

  constructor( private http: HttpClient) { }
   
  /**
   *  POST: add a new object to the database 
   */
  save(uom: Uom): Observable<Uom> {
    return this.http.post<Uom>(environment.baseUrl2 + '/uom/add', uom);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Uom> {
    return this.http.put<Uom>(environment.baseUrl2 + '/uom/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Uom[]> {
    return this.http.get<Uom[]>(environment.baseUrl2 + '/uom/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<Uom[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<Uom[]>(environment.baseUrl2 + '/uom/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<Uom[]> {
  return this.http.get<Uom[]>(environment.baseUrl2 + '/uom/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<Uom> {
  return this.http.get<Uom>(environment.baseUrl2 + '/uom/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<Uom> {
    return this.http.get<Uom>(environment.baseUrl2 + '/uom/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Uom> {
    return this.http.get<Uom>(environment.baseUrl2 + '/uom/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/uom/names');
    }

}
