import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TherapeuticClass } from '../_models/therapeutic-class.model';

@Injectable({
  providedIn: 'root'
})

export class TherapeuticClassService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(therapeuticClass: TherapeuticClass): Observable<TherapeuticClass> {
    return this.http.post<TherapeuticClass>(environment.baseUrl2 + '/therapeutic-class/add', therapeuticClass);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<TherapeuticClass> {
    return this.http.put<TherapeuticClass>(environment.baseUrl2 + '/therapeutic-class/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<TherapeuticClass[]> {
    return this.http.get<TherapeuticClass[]>(environment.baseUrl2 + '/therapeutic-class/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<TherapeuticClass[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<TherapeuticClass[]>(environment.baseUrl2 + '/therapeutic-class/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<TherapeuticClass[]> {
  return this.http.get<TherapeuticClass[]>(environment.baseUrl2 + '/therapeutic-class/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<TherapeuticClass> {
  return this.http.get<TherapeuticClass>(environment.baseUrl2 + '/therapeutic-class/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<TherapeuticClass> {
    return this.http.get<TherapeuticClass>(environment.baseUrl2 + '/therapeutic-class/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<TherapeuticClass> {
    return this.http.get<TherapeuticClass>(environment.baseUrl2 + '/therapeutic-class/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/therapeutic-class/active_name');
    }
}
