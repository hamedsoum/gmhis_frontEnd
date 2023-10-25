import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISInvoiceHCreate, GMHISInvoiceHPartial } from "../domain/gmhis.quotation";
import { GMHISInvoiceHItemPartial } from "../domain/gmhis.quotation.item";

@Injectable({providedIn: 'root'})
export class GMHISInvoiceHService {
    private readonly host = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public search(data): Observable<PageList> {
      let queryParams = {};

      queryParams = {
        params: new HttpParams()
          .set('sort', data['sort'])
          .set('page', data['page'])
          .set('size', data['size'] ?? "")
      };

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.invoiceH.index, queryParams)
    }

    public retrieve(invoiceHID: string): Observable<GMHISInvoiceHPartial>{
        GmhisUtils.notNull(invoiceHID, 'invoiceHID');

        return this.http.get<GMHISInvoiceHPartial>(this.host + GMHIS_ENDPOINT.invoiceH.retrieve.replace('${invoiceHID}', invoiceHID.trim()));
    }

    public findnvoiceItemsByinvoiceHID(invoiceHID: string): Observable<GMHISInvoiceHItemPartial[]>{
        GmhisUtils.notNull(invoiceHID, 'invoiceHID');

        return this.http.get<GMHISInvoiceHItemPartial[]>(this.host + GMHIS_ENDPOINT.invoiceH.find.replace('${invoiceHID}', invoiceHID.trim()));
    }

    public update(invoiceHID: string, invoiceHCreate: GMHISInvoiceHCreate): Observable<GMHISInvoiceHPartial>{
        GmhisUtils.notNull(invoiceHID, 'invoiceHID');
        GmhisUtils.notNull(invoiceHCreate, 'invoiceHCreate');

        return this.http.put<GMHISInvoiceHPartial>(this.host + GMHIS_ENDPOINT.invoiceH.update.replace('${invoiceHID}', invoiceHID.trim()), invoiceHCreate)
    }

    public create(invoiceHCreate: GMHISInvoiceHCreate): Observable<GMHISInvoiceHPartial> {            
        GmhisUtils.notNull(invoiceHCreate, 'invoiceHCreate');
        
        return this.http.post<GMHISInvoiceHPartial>(this.host + GMHIS_ENDPOINT.invoiceH.create, invoiceHCreate)
    }
}