import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageList } from '../_models/page-list.model';
import { Practician } from './practician';

@Injectable({
  providedIn: 'root'
})
export class PracticianService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) {}

  findPracticianSimpleList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/practician/active_practicians_name`);
  }

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
      return this.http.get<PageList>(`${this.apiUrl}/practician/list`, queryParams)
    }
  
    save(practician: Practician): Observable<Practician> {
      return this.http.post<Practician>(`${this.apiUrl}/practician/add`, practician)
    }
  
   
    update(practician: Practician): Observable<Practician> {
      return this.http.put<Practician>(`${this.apiUrl}/practician/update/` + practician.id, practician)
    }
  
     getPracticianDetails(practician : number) : Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/practician/get-detail/` + practician)
    }
}
