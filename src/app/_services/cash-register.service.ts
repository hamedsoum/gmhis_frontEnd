import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CashRegister } from '../_models/cashRegister.model';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {

  constructor(private http: HttpClient) { }


  /**
   *  POST: add a new object to the database 
   */
  save(cashRegister: CashRegister): Observable<CashRegister> {
    return this.http.post<CashRegister>(environment.baseUrl2 + '/cash-register/add', cashRegister);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<CashRegister> {
    return this.http.put<CashRegister>(environment.baseUrl2 + '/cash-register/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<CashRegister[]> {
    return this.http.get<CashRegister[]>(environment.baseUrl2 + '/cash-register/list');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<CashRegister[]> {
    let queryParams = {};
    data['active'] = (data['active'] == null) ? '' : data['active'];
    //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('name', data['name'])
        .set('active', data['active'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<CashRegister[]>(environment.baseUrl2 + '/cash-register/p_list', queryParams);
  }

  /**
   * get a list of active object
   */
  findActive(): Observable<CashRegister[]> {
    return this.http.get<CashRegister[]>(environment.baseUrl2 + '/cash-register/active_list');

  }

  /**
   * enable a object
   */
  enable(id): Observable<CashRegister> {
    return this.http.get<CashRegister>(environment.baseUrl2 + '/cash-register/enable/' + id);

  }

  /**
   * disable a object
   */
  disable(id): Observable<CashRegister> {
    return this.http.get<CashRegister>(environment.baseUrl2 + '/cash-register/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<CashRegister> {
    return this.http.get<CashRegister>(environment.baseUrl2 + '/cash-register/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/cash-register/active_cash_registers_name');
  }

}
