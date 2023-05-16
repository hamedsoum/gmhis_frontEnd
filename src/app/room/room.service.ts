import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PageList } from "../_models/page-list.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set("libelle", data["libelle"])
        .set("storeyId", data["storeyId"])
        .set("type", data["type"])
        .set("size", data["size"] ?? "")
        .set("page", data["page"])
        .set("sort", data["sort"]),
    };

    return this.http.get<PageList>(`${this.apiUrl}/bedroom/list`, queryParams);
  }

  findRoomSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bedroom/list-simple`);
  }

  createRoom(newRoom: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bedroom/add`, newRoom);
  }

  updateRoom(room: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/bedroom/update/${room.id}`, room);
  }

  getRoomDetail(room: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bedroom/detail/${room.id}`);
  }

  deleteRoom(roomId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/bedroom/delete/${roomId}`);
  }
}
