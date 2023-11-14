import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GmhisUtils } from "src/app/shared/base/utils";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { GMHISHospitalizationCreate, GMHISHospitalizationPartial } from "../domain/gmhis-hospitalization";

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

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.hospitalization.index, queryParams)
    }

    public retrieve(hospitalizationID: string): Observable<GMHISHospitalizationPartial>{
        GmhisUtils.notNull(hospitalizationID, 'hospitalizationID');

        return this.http.get<GMHISHospitalizationPartial>(this.host + GMHIS_ENDPOINT.hospitalization.retrieve.replace('${hospitalizationID}', hospitalizationID.trim()));
    }

    public update(hospitalizationID: string, hospitalizationCreate: GMHISHospitalizationCreate): Observable<GMHISHospitalizationPartial>{
        GmhisUtils.notNull(hospitalizationID, 'hospitalizationID');
        GmhisUtils.notNull(hospitalizationCreate, 'hospitalizationCreate');

        return this.http.put<GMHISHospitalizationPartial>(this.host + GMHIS_ENDPOINT.hospitalization.update.replace('${hospitalizationID}', hospitalizationID.trim()), hospitalizationCreate)
    }

    public addNurse(hospitalizationID: string, nurseID: number): Observable<GMHISHospitalizationPartial>{
        GmhisUtils.notNull(hospitalizationID, 'hospitalizationID');
        GmhisUtils.notNull(nurseID, 'nurseID');

        return this.http.put<GMHISHospitalizationPartial>(this.host + GMHIS_ENDPOINT.hospitalization.addNurse.replace('${hospitalizationID}', hospitalizationID.trim()), nurseID)
    }

    public close(hospitalizationID: string, hospitalizationCreate: GMHISHospitalizationCreate): Observable<GMHISHospitalizationPartial>{
        GmhisUtils.notNull(hospitalizationID, 'hospitalizationID');
        GmhisUtils.notNull(hospitalizationCreate, 'hospitalizationCreate');

        return this.http.put<GMHISHospitalizationPartial>(this.host + GMHIS_ENDPOINT.hospitalization.close.replace('${hospitalizationID}', hospitalizationID.trim()), hospitalizationCreate)
    }

    public create(hospitalizationCreate: GMHISHospitalizationCreate): Observable<GMHISHospitalizationPartial> {            
        GmhisUtils.notNull(hospitalizationCreate, 'hospitalizationCreate');
        
        return this.http.post<GMHISHospitalizationPartial>(this.host + GMHIS_ENDPOINT.hospitalization.create, hospitalizationCreate)
    }
    
}