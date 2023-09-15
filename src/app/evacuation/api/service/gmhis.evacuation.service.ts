import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISEvacuationCreateUpdate, GMHISEvacuationPartial } from "../domain/evacuation.domain";

@Injectable({
    providedIn: 'root'
  })
export class GmhisEvacuationService {

    private readonly host = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public search(data): Observable<PageList> {
      let queryParams = {};

      queryParams = {
        params: new HttpParams()
          .set('service', data['service'] ?? "")
          .set('sort', data['sort'])
          .set('page', data['page'])
          .set('size', data['size'] ?? "")
      };

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.evacuation.index, queryParams)
    }

    public retrieve(evacuationID: string): Observable<GMHISEvacuationPartial>{
        GmhisUtils.notNull(evacuationID, 'evacuationID');
        return this.http.get<GMHISEvacuationPartial>(this.host + GMHIS_ENDPOINT.evacuation.retrieve.replace('${cashierID}', evacuationID.trim()));
    }

    public update(evacuationID: string, evacuationCreate: GMHISEvacuationCreateUpdate): Observable<GMHISEvacuationPartial>{
        GmhisUtils.notNull(evacuationID, 'evacuationID');
        GmhisUtils.notNull(evacuationCreate, 'evacuationCreate');
        return this.http.put<GMHISEvacuationPartial>(this.host + GMHIS_ENDPOINT.evacuation.update.replace('${evacuationID}', evacuationID.trim()), evacuationCreate)
    }

    public create(evacuationCreate: GMHISEvacuationCreateUpdate): Observable<GMHISEvacuationPartial> {      
        GmhisUtils.notNull(evacuationCreate, 'evacuationCreate');
        return this.http.post<GMHISEvacuationPartial>(this.host + GMHIS_ENDPOINT.evacuation.create, evacuationCreate)
    }
    
}