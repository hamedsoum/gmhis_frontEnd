import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PageList } from "../_models/page-list.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BedroomTypeService {
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

    return this.http.get<PageList>(
      `${this.apiUrl}/bedroom-type/list`,
      queryParams
    );
  }

  findBedroomTypeSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bedroom-type/list-simple`);
  }

  createBedroomType(newBedroomType: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/bedroom-type/add`,
      newBedroomType
    );
  }

  updateBedroomType(bedroomType: any): Observable<any> {
    // const bedroomTypeUpdate = {
    //   libelle: bedroomType.libelle,
    //   building: bedroomType.building,
    // };
    return this.http.put<any>(
      `${this.apiUrl}/bedroom-type/update/${bedroomType.id}`,
      bedroomType
    );
  }

  getBedroomTypeDetail(bedroomType: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/bedroom-type/detail/${bedroomType.id}`
    );
  }

  deleteBedroomType(bedroomTypeId: any): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/bedroom-type/delete/${bedroomTypeId}`
    );
  }
}
