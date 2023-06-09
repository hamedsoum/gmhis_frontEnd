import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageList } from '../_models/page-list.model';
import { Speciality } from './speciality-list/speciality';

@Injectable({
  providedIn: 'root'
})
export class SepecialityService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) {}

  retrieveSpecialityNameAndId(): Observable<any[]> {return this.http.get<any[]>(`${this.apiUrl}/practician/active_practicians_name`);}

    findAll(data): Observable<PageList> {
      let queryParams = {};
      queryParams = {
        params: new HttpParams()
          .set('name', data['name'])
          .set('page', data['page'])
          .set('size', data['size'] ?? "")
          .set('isActive', data['isActive'] ?? "")
          .set('sort', data['sort'])
      };
      return this.http.get<PageList>(`${this.apiUrl}/speciality/list`, queryParams)
    }
  
    save(speciality: Speciality): Observable<Speciality> {
      return this.http.post<Speciality>(`${this.apiUrl}/speciality/add`, speciality)
    }
  
    update(speciliaty: Speciality): Observable<Speciality> {
      return this.http.put<Speciality>(`${this.apiUrl}/speciality/update/` + speciliaty.id, speciliaty)
    }
  
     details(speciliatyID : number) : Observable<Speciality>{
      return this.http.get<Speciality>(`${this.apiUrl}/speciality/get-detail/` + speciliatyID)
    }
}
