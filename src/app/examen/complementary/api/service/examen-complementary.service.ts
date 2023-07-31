import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GMHIS_ENDPOINT } from "src/app/_constants/endpoint.constant";
import { PageList } from "src/app/_models/page-list.model";
import { environment } from "src/environments/environment";
import { examenComplementary as ExamenComplementary, ExamenComplementaryCreate, examenComplementaryPartial as ExamenComplementaryPartial } from "../domain/examenComplementary";

@Injectable({
    providedIn: 'root'
  })
export class ExamenComplementaryService {

    private readonly host = environment.apiUrl;
    constructor(private http: HttpClient) { }

    public findExamenComplementaries(): Observable<ExamenComplementary[]>{
        return this.http.get<ExamenComplementary[]>(this.host + GMHIS_ENDPOINT.examenComplementary.find);
    }

    public searchExamenComplementaries(data): Observable<PageList> {
      let queryParams = {};

      queryParams = {
        params: new HttpParams()
          .set('active', data['active'] ?? "")
          .set('sort', data['sort'])
          .set('page', data['page'])
          .set('size', data['size'] ?? "")
      };

      return this.http.get<PageList>(this.host + GMHIS_ENDPOINT.examenComplementary.index, queryParams)
    }

    public retrieveExamenComplementary(examenComplementaryID: string): Observable<ExamenComplementaryPartial>{
        if (examenComplementaryID == undefined || examenComplementaryID == null) throw new Error("cashier must not be empty");
        return this.http.get<ExamenComplementaryPartial>(this.host + GMHIS_ENDPOINT.examenComplementary.retrieve.replace('${examenComplementaryID}', examenComplementaryID.trim));
    }

    public updateCashier(examenComplementaryID: string, examenComplementaryCreate: ExamenComplementaryCreate): Observable<ExamenComplementary>{
        if (examenComplementaryID == undefined || examenComplementaryID == null) throw new Error("cashier must not be empty");
        if (examenComplementaryCreate == undefined || examenComplementaryCreate == null) throw new Error("examenComplementaryCreate must not be empty");
        return this.http.put<ExamenComplementary>(this.host + GMHIS_ENDPOINT.examenComplementary.update.replace('${examenComplementaryID}', examenComplementaryID.trim()), examenComplementaryCreate)
    }

    public createCashier(examenComplementaryCreate: ExamenComplementaryCreate): Observable<ExamenComplementary> {      
        if (examenComplementaryCreate == undefined || examenComplementaryCreate == null) throw new Error("examenComplementaryCreate must not be empty");
        return this.http.post<ExamenComplementary>(this.host + GMHIS_ENDPOINT.examenComplementary.create, examenComplementaryCreate)
    }
    
}