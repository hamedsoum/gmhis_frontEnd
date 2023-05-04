import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PharmacologicalForm } from '../_models/pharmacological-form.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacologicalFormService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(pharmaForm: PharmacologicalForm): Observable<PharmacologicalForm> {
    return this.http.post<PharmacologicalForm>(environment.baseUrl2 + '/pharma-form/add', pharmaForm);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<PharmacologicalForm> {
    return this.http.put<PharmacologicalForm>(environment.baseUrl2 + '/pharma-form/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<PharmacologicalForm[]> {
    return this.http.get<PharmacologicalForm[]>(environment.baseUrl2 + '/pharma-form/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<PharmacologicalForm[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<PharmacologicalForm[]>(environment.baseUrl2 + '/pharma-form/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<PharmacologicalForm[]> {
  return this.http.get<PharmacologicalForm[]>(environment.baseUrl2 + '/pharma-form/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<PharmacologicalForm> {
  return this.http.get<PharmacologicalForm>(environment.baseUrl2 + '/pharma-form/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<PharmacologicalForm> {
    return this.http.get<PharmacologicalForm>(environment.baseUrl2 + '/pharma-form/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<PharmacologicalForm> {
    return this.http.get<PharmacologicalForm>(environment.baseUrl2 + '/pharma-form/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/pharma-form/active_name');
    }
}
