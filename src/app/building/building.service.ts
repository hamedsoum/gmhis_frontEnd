import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PageList } from "../_models/page-list.model";
import { environment } from "src/environments/environment";
import { IBuilding } from "../_models/building.model";

@Injectable({
  providedIn: "root",
})
export class BuildingService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set("page", data["page"])
        .set("size", data["size"] ?? "")
        .set("libelle", data["libelle"])
        .set("sort", data["sort"]),
    };

    return this.http.get<PageList>(`${this.apiUrl}/building/list`, queryParams);
  }

  findBuildingSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/building/list-simple`);
  }

  createBuilding(newBuilding: any): Observable<IBuilding> {
    return this.http.post<IBuilding>(
      `${this.apiUrl}/building/add`,
      newBuilding
    );
  }

  updateBuilding(building: any): Observable<any> {
    const buildingUpdate = {
      libelle: building.libelle,
    };
    return this.http.put<any>(
      `${this.apiUrl}/building/update/${building.id}`,
      buildingUpdate
    );
  }

  getBuildingDetail(building: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/building/detail/${building.id}`);
  }

  deleteBuilding(buildingId: any): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/building/delete/${buildingId}`
    );
  }
}
