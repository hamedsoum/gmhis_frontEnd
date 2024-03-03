import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CashRegisterActivity } from '../_models/cash-register-activity';
import { PageList } from '../_models/page-list.model';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterActivityService {

  private readonly apiUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }


   public getPaginatedListOfCrActivity(data) : Observable<PageList>{
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
      .set('page', data['page'])
      .set('size', data['size'] ?? '')
      .set('cashier', data['cashier'])
      .set('cashRegister', data['cashRegister'])
      .set('state', data['state'] ?? '')
      .set('sort', data['sort'])
    }
    return this.http.get<PageList>(`${this.apiUrl}/api/v1/cashRegisterManagement`, queryParams);
  }


  public getCashRegisterActivity(cashRegisterID : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/api/v1/cashRegisterManagement/${cashRegisterID}`);
  }

  public getCashRegisterActivityByCahier(cashieriD : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/api/v1/cashRegisterManagement/crM/${cashieriD}`);
  }

  public createCrActivity(crActivityDto : CashRegisterActivity): Observable<CashRegisterActivity>{    
    return this.http.post<CashRegisterActivity>(`${this.apiUrl}/api/v1/cashRegisterManagement`, crActivityDto)
  }

  public updateCrActivity(crActivityDto : CashRegisterActivity) : Observable<CashRegisterActivity>{    
    return this.http.put<CashRegisterActivity>(`${this.apiUrl}/api/v1/cashRegisterManagement/${crActivityDto.id}`, crActivityDto)
  }
}
