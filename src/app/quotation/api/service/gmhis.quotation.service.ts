import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISQuotationCreate, GMHISQuotationPartial } from "../domain/gmhis.quotation";

@Injectable({providedIn: 'root'})
export class GMHISQuotationService {
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

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.quotation.index, queryParams)
    }

    public retrieve(quotationID: string): Observable<GMHISQuotationPartial>{
        GmhisUtils.notNull(quotationID, 'quotationID');

        return this.http.get<GMHISQuotationPartial>(this.host + GMHIS_ENDPOINT.quotation.retrieve.replace('${quotationID}', quotationID.trim()));
    }

    public update(quotationID: string, quotationCreate: GMHISQuotationCreate): Observable<GMHISQuotationPartial>{
        GmhisUtils.notNull(quotationID, 'quotationID');
        GmhisUtils.notNull(quotationCreate, 'quotationCreate');

        return this.http.put<GMHISQuotationPartial>(this.host + GMHIS_ENDPOINT.quotation.update.replace('${quotationID}', quotationID.trim()), quotationCreate)
    }

    public create(quotationCreate: GMHISQuotationCreate): Observable<GMHISQuotationPartial> {            
        GmhisUtils.notNull(quotationCreate, 'quotationCreate');
        
        return this.http.post<GMHISQuotationPartial>(this.host + GMHIS_ENDPOINT.quotation.create, quotationCreate)
    }
}