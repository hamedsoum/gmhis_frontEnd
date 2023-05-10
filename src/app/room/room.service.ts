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
        .set("page", data["page"])
        .set("size", data["size"] ?? "")
        .set("libelle", data["libelle"])
        .set("sort", data["sort"]),
    };

    return this.http.get<PageList>(`${this.apiUrl}/room/list`, queryParams);
  }

  findRoomSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/room/list-simple`);
  }

  createRoom(newRoom: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/room/add`, newRoom);
  }

  updateRoom(room: any): Observable<any> {
    const roomUpdate = {
      libelle: room.libelle,
    };
    return this.http.put<any>(
      `${this.apiUrl}/room/update/${room.id}`,
      roomUpdate
    );
  }

  getRoomDetail(room: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/room/detail/${room.id}`);
  }

  deleteRoom(roomId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/room/delete/${roomId}`);
  }
}
