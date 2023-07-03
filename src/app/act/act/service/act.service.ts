import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageList } from 'src/app/_models/page-list.model';
import { environment } from 'src/environments/environment';
import { ActDto } from '../models/act-dto';

@Injectable({
  providedIn: 'root'
})
export class ActService {

  private readonly apiUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }

  public getPaginatedListOfAct(data) : Observable<PageList>{
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
      .set('page', data['page'])
      .set('size', data['size'] ?? '')
      .set('name', data['name'])
      .set('category', data['category'])
      .set('active', data['active'] ?? '')
      .set('sort', data['sort'])
    }
    return this.http.get<PageList>(`${this.apiUrl}/act/list`, queryParams);
  }

  public getListOfActiveAct() : Observable<any>{
    return this.http.get(`${this.apiUrl}/act/active_acts_name`);
  }

  public getListOfAllMedicalAnalysis() : Observable<any>{
    return this.http.get(`${this.apiUrl}/act/find-All-medical-Analysis`);
  }

  public getActById(actId : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/act/get-detail/${actId}`);
  }

  public createAct(actDto : ActDto): Observable<ActDto>{    
    return this.http.post<ActDto>(`${this.apiUrl}/act/add`, actDto)
  }

  public updateAct(actDto : ActDto) : Observable<ActDto>{
    return this.http.put<ActDto>(`${this.apiUrl}/act/update/${actDto.id}`, actDto)
  }

  public getActsByBillId(BillId : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/act/find-by-bill/${BillId}`);
  }

  public retrieveSpecialityActs(specialityId : number): Observable<any>{
    return this.http.get(`${this.apiUrl}/act/active_acts_name_by_Category/${specialityId}`);
  }

}
