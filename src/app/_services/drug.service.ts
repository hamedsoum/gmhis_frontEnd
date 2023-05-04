import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drug } from '../_models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http: HttpClient) { }

  /**
  *  POST: add a new object to the database 
  */
  save(drug: Drug): Observable<Drug> {
    return this.http.post<Drug>(environment.baseUrl2 + '/article/add', drug);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(drug: Drug): Observable<Drug> {
    return this.http.put<Drug>(environment.baseUrl2 + '/article/update/' + drug.id, drug);
  }

  /** 
   * DELETE: delete the hero from the server 
   */
  delete(id: number): Observable<{}> {
    return this.http.delete(environment.baseUrl2 + '/article/delete/' + id);
  }

  /**
   * get a list of object
   */
  findAllPharmacyArticle(data : object): Observable<any[]> {

    let queryParams = {};

    data['active'] = (data['active'] == null) ? '' : data['active'];
    data['dcuId'] = (data['dcuId'] == null) ? '' : data['dcuId'];
    data['drugLabId'] = (data['laboratory'] == null) ? '' : data['laboratory'];
    data['theraClassId'] = (data['theraClassId'] == null) ? '' : data['theraClassId'];
    data['dcns'] = (data['dcns'] == null) ? '' : data['dcns'];
    data['pharmaFormId'] = (data['pharmaFormId'] == null) ? '' : data['pharmaFormId'];

    queryParams = {
      params: new HttpParams().set('name', data['name'])
      .set('page', data['page'])
      .set('drugLabId', data['drugLabId'])
      .set('dcuId', data['dcuId'])
      .set('dcns', data['dcns'])
      .set('theraClassId', data['theraClassId'])
      .set('pharmaFormId', data['pharmaFormId'])
      .set('active', data['active'])
      .set('size', data['size'])
      .set('sort', data['sort'] + ',' + data['order'])
      
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/article/pharmacy/p_list', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/article/' + id);
  }

  /**
   * get object by criteria
   * 
   */
  findByCriteria(data): Observable<any[]> {
    let queryParams = {};
    data['active'] = (data['active'] == null) ? '' : data['active'];
    data['conditioningUnit'] = (data['conditioningUnit'] == null) ? '' : data['conditioningUnit'];
    data['drugLabId'] = (data['drugLabId'] == null) ? '' : data['drugLabId'];
    data['theraClassId'] = (data['theraClassId'] == null) ? '' : data['theraClassId'];
    data['pharmaFormId'] = (data['pharmaFormId'] == null) ? '' : data['pharmaFormId'];
    data['active'] = (data['active'] == null) ? '' : data['active'];
    queryParams = {
      params: new HttpParams()
        .set('drugLabId', data['drugLabId'])
        .set('dcuId', data['conditioningUnit'])
        // .set('dcnId', data['dci'])
        .set('theraClassId', data['therapeuticClass'])
        .set('pharmaFormId', data['pharmaFormId'])
        .set('generic', data['generic'])
        .set('princeps', data['princeps'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])

    };

    return this.http.get<any[]>(environment.baseUrl2 + '/article/active_by_criteria', queryParams);

  }
}
