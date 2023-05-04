import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnalysisDomain } from '../_models/analysisDomain.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisDomainService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(analysisDomain: AnalysisDomain): Observable<AnalysisDomain> {
    return this.http.post<AnalysisDomain>(environment.baseUrl2 + '/analysis-domain/add', analysisDomain);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<AnalysisDomain> {
    return this.http.put<AnalysisDomain>(environment.baseUrl2 + '/analysis-domain/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<AnalysisDomain[]> {
    return this.http.get<AnalysisDomain[]>(environment.baseUrl2 + '/analysis-domain/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<AnalysisDomain[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<AnalysisDomain[]>(environment.baseUrl2 + '/analysis-domain/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<AnalysisDomain[]> {
  return this.http.get<AnalysisDomain[]>(environment.baseUrl2 + '/analysis-domain/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<AnalysisDomain> {
  return this.http.get<AnalysisDomain>(environment.baseUrl2 + '/analysis-domain/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<AnalysisDomain> {
    return this.http.get<AnalysisDomain>(environment.baseUrl2 + '/analysis-domain/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<AnalysisDomain> {
    return this.http.get<AnalysisDomain>(environment.baseUrl2 + '/analysis-domain/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/analysis-domain/active_name');
    }
}
