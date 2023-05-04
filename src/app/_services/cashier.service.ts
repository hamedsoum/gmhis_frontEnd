import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cashier } from '../_models/cahier.model';

@Injectable({
  providedIn: 'root'
})
export class CashierService {

  constructor(private http: HttpClient) { }


  /**
   *  POST: add a new object to the database 
   */
  save(cashier: Cashier): Observable<Cashier> {
    return this.http.post<Cashier>(environment.baseUrl2 + '/cashier/add', cashier);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Cashier> {
    return this.http.put<Cashier>(environment.baseUrl2 + '/cashier/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<Cashier[]> {
    return this.http.get<Cashier[]>(environment.baseUrl2 + '/cashier/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<Cashier[]> {
    let queryParams = {};
    data['active'] = (data['active'] == null) ? '' : data['active'];
    data['cashRegister'] = (data['cashRegister'] == null) ? '' : data['cashRegister'];
    
    queryParams = {
      params: new HttpParams()
        .set('firstName', data['firstName'])
        .set('lastName', data['lastName'])
        .set('phoneContact', data['phoneContact'])
        .set('cashRegister', data['cashRegister'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])
        .set('page', data['page'])
        .set('size', data['entries'])
    };
    return this.http.get<Cashier[]>(environment.baseUrl2 + '/cashier/p_list', queryParams);
  }

  /**
   * get a list of active object
   */
  findActive(): Observable<Cashier[]> {
    return this.http.get<Cashier[]>(environment.baseUrl2 + '/cashier/active_list');

  }

  /**
   * enable a object
   */
  enable(id): Observable<Cashier> {
    return this.http.get<Cashier>(environment.baseUrl2 + '/cashier/enable/' + id);

  }

  /**
   * disable a object
   */
  disable(id): Observable<Cashier> {
    return this.http.get<Cashier>(environment.baseUrl2 + '/cashier/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Cashier> {
    return this.http.get<Cashier>(environment.baseUrl2 + '/cashier/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/cashier/active_cashiers_name');
  }

}
