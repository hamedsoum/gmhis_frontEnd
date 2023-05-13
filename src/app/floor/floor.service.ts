import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PageList } from "../_models/page-list.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FloorService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set("page", data["page"])
        .set("size", data["size"] ?? "")
        .set("libelle", data["libelle"])
        .set("buildingId", data["buildingId"])
        .set("sort", data["sort"]),
    };

    return this.http.get<PageList>(`${this.apiUrl}/storey/list`, queryParams);
  }

  findFloorSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/storey/list-simple`);
  }

  createFloor(newFloor: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/storey/add`, newFloor);
  }

  updateFloor(floor: any): Observable<any> {
    const floorUpdate = {
      libelle: floor.libelle,
      building: floor.building,
    };
    return this.http.put<any>(
      `${this.apiUrl}/storey/update/${floor.id}`,
      floorUpdate
    );
  }

  getFloorDetail(floor: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/storey/detail/${floor.id}`);
  }

  deleteFloor(floorId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/storey/delete/${floorId}`);
  }
}
