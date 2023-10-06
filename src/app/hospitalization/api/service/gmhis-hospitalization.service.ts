import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISHospitalizationRequestCreate, GMHISHospitalizationRequestPartial } from "../domain/request/gmhis-hospitalization-request";

@Injectable({providedIn: 'root'})
export class GmhisHospitalizationService {
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

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.hospitalizationRequest.index, queryParams)
    }

    public retrieve(hospitalizationRequestID: string): Observable<GMHISHospitalizationRequestPartial>{
        GmhisUtils.notNull(hospitalizationRequestID, 'hospitalizationRequestID');

        return this.http.get<GMHISHospitalizationRequestPartial>(this.host + GMHIS_ENDPOINT.hospitalizationRequest.retrieve.replace('${hospitalizationRequestID}', hospitalizationRequestID.trim()));
    }

    public update(hospitalizationRequestID: string, deathCreate: GMHISHospitalizationRequestCreate): Observable<GMHISHospitalizationRequestPartial>{
        GmhisUtils.notNull(hospitalizationRequestID, 'hospitalizationRequestID');
        GmhisUtils.notNull(deathCreate, 'deathCreate');

        return this.http.put<GMHISHospitalizationRequestPartial>(this.host + GMHIS_ENDPOINT.hospitalizationRequest.update.replace('${hospitalizationRequestID}', hospitalizationRequestID.trim()), deathCreate)
    }

    public create(deathCreate: GMHISHospitalizationRequestCreate): Observable<GMHISHospitalizationRequestPartial> {            
        GmhisUtils.notNull(deathCreate, 'deathCreate');
        
        return this.http.post<GMHISHospitalizationRequestPartial>(this.host + GMHIS_ENDPOINT.hospitalizationRequest.create, deathCreate)
    }
    
}