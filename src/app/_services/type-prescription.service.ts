import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypePrescription } from '../_models/typePrescription.model';


@Injectable({
  providedIn: 'root'
})
export class TypePrescriptionService {

  constructor (
    private http: HttpClient
  ) { }

 /**
   *  POST: add a new object to the database 
   */
  save(typePrescription: TypePrescription): Observable<TypePrescription> {
    return this.http.post<TypePrescription>(environment.baseUrl2 + '/prescription_type/add', typePrescription);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TypePrescription> {
    return this.http.put<TypePrescription>(environment.baseUrl2 + '/prescription_type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/prescription_type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<any[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<any[]>(environment.baseUrl2 + '/prescription_type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<any[]> {
  return this.http.get<any[]>(environment.baseUrl2 + '/prescription_type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<any> {
  return this.http.get<any>(environment.baseUrl2 + '/prescription_type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/prescription_type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/prescription_type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/prescription_type/active_names');
    }

}
