import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCertificate } from '../_models/typeCertificate.model';

@Injectable({
  providedIn: 'root'
})
export class TypeCertificateService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(typeCertificate: TypeCertificate): Observable<TypeCertificate> {
    return this.http.post<TypeCertificate>(environment.baseUrl2 + '/certificat-type/add', typeCertificate);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TypeCertificate> {
    return this.http.put<TypeCertificate>(environment.baseUrl2 + '/certificat-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<TypeCertificate[]> {
    return this.http.get<TypeCertificate[]>(environment.baseUrl2 + '/certificat-type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<TypeCertificate[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<TypeCertificate[]>(environment.baseUrl2 + '/certificat-type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<TypeCertificate[]> {
  return this.http.get<TypeCertificate[]>(environment.baseUrl2 + '/certificat-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<TypeCertificate> {
  return this.http.get<TypeCertificate>(environment.baseUrl2 + '/certificat-type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<TypeCertificate> {
    return this.http.get<TypeCertificate>(environment.baseUrl2 + '/certificat-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<TypeCertificate> {
    return this.http.get<TypeCertificate>(environment.baseUrl2 + '/certificat-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/certificat-type/active_names');
    }
}
