import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnalysisType } from '../_models/analysisType.model';

@Injectable({
  providedIn: 'root'
})
export class AnalysisTypeService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(analysisType: AnalysisType): Observable<AnalysisType> {
    return this.http.post<AnalysisType>(environment.baseUrl2 + '/analysis-type/add', analysisType);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<AnalysisType> {
    return this.http.put<AnalysisType>(environment.baseUrl2 + '/analysis-type/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<AnalysisType[]> {
    return this.http.get<AnalysisType[]>(environment.baseUrl2 + '/analysis-type/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<AnalysisType[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];

       queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<AnalysisType[]>(environment.baseUrl2 + '/analysis-type/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<AnalysisType[]> {
  return this.http.get<AnalysisType[]>(environment.baseUrl2 + '/analysis-type/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<AnalysisType> {
  return this.http.get<AnalysisType>(environment.baseUrl2 + '/analysis-type/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<AnalysisType> {
    return this.http.get<AnalysisType>(environment.baseUrl2 + '/analysis-type/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<AnalysisType> {
    return this.http.get<AnalysisType>(environment.baseUrl2 + '/analysis-type/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/analysis-type/active_name');
    }

   
}
