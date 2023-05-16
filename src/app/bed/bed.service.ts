import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PageList } from "../_models/page-list.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BedService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set("libelle", data["libelle"])
        .set("bedroomId", data["bedroomId"])
        .set("state", data["state"])
        .set("page", data["page"])
        .set("size", data["size"] ?? "")
        .set("sort", data["sort"]),
    };

    return this.http.get<PageList>(`${this.apiUrl}/bed/list`, queryParams);
  }

  findBedSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bed/list-simple`);
  }

  createBed(newBed: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bed/add`, newBed);
  }

  updateBed(bedUpdate: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/bed/update/${bedUpdate.id}`,
      bedUpdate
    );
  }

  getBedDetail(bed: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bed/detail/${bed.id}`);
  }

  deleteBed(bedId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/bed/delete/${bedId}`);
  }
}
