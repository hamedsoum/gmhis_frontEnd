import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISDeathCreateUpdate, GMHISDeathPartial } from "../domain/gmhis.death.domain";

@Injectable({
    providedIn: 'root'
  })
export class GmhisDeathService {

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

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.death.index, queryParams)
    }

    public retrieve(deathID: string): Observable<GMHISDeathPartial>{
        GmhisUtils.notNull(deathID, 'deathID');
        return this.http.get<GMHISDeathPartial>(this.host + GMHIS_ENDPOINT.death.retrieve.replace('${deathID}', deathID.trim()));
    }

    public update(deathID: string, deathCreate: GMHISDeathCreateUpdate): Observable<GMHISDeathPartial>{
        GmhisUtils.notNull(deathID, 'deathID');
        GmhisUtils.notNull(deathCreate, 'deathCreate');
        return this.http.put<GMHISDeathPartial>(this.host + GMHIS_ENDPOINT.death.update.replace('${deathID}', deathID.trim()), deathCreate)
    }

    public create(deathCreate: GMHISDeathCreateUpdate): Observable<GMHISDeathPartial> {   
      console.log(deathCreate);
         
        GmhisUtils.notNull(deathCreate, 'deathCreate');
        return this.http.post<GMHISDeathPartial>(this.host + GMHIS_ENDPOINT.death.create, deathCreate)
    }
    
}