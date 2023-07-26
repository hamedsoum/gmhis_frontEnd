import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { Cashier, CashierCreate } from "../domain/cashier";

@Injectable({
    providedIn: 'root'
  })
export class CashierService {

    private readonly host = environment.apiUrl;
    constructor(private http: HttpClient) { }

    public searchCashiers(data): Observable<PageList> {
      let queryParams = {};

      queryParams = {
        params: new HttpParams()
          .set('active', data['active'] ?? "")
          .set('sort', data['sort'])
          .set('page', data['page'])
          .set('size', data['size'] ?? "")
      };

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.cashier.index, queryParams)
    }

    public retrieveCashier(cashierID: string): Observable<Cashier>{
        if (cashierID == undefined || cashierID == null) throw new Error("cashier must not be empty");
        return this.http.get<Cashier>(this.host + GMHIS_ENDPOINT.cashier.retrieve.replace('${cashierID}', cashierID.trim));
    }

    public updateCashier(cashierID: string, cashierCreate: CashierCreate): Observable<Cashier>{
        if (cashierID == undefined || cashierID == null) throw new Error("cashier must not be empty");
        if (cashierCreate == undefined || cashierCreate == null) throw new Error("cashierCreate must not be empty");
        return this.http.put<Cashier>(this.host + GMHIS_ENDPOINT.cashier.update.replace('${cashierID}', cashierID.trim()), cashierCreate)
    }

    public createCashier(cashierCreate: CashierCreate): Observable<Cashier> {      
        if (cashierCreate == undefined || cashierCreate == null) throw new Error("cashierCreate must not be empty");
        return this.http.post<Cashier>(this.host + GMHIS_ENDPOINT.cashier.create, cashierCreate)
    }
    
}