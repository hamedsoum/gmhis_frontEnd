import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  /**
  * get a list of id and name of objects
  */
  findByRegion(id: number) {
    return this.http.get<any>(environment.baseUrl2 + '/region/districts_name/{id}' + id);
  }

  /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<any[]> {

    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('name', data['name'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<any[]>(environment.baseUrl2 + '/region/p_districts/' + data['region'], queryParams);
  }

  /**
  * get a list of active object
  */
  getIdAndName(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/district/names');
  }

}
