import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

 /**
   * get a list of id and name of objects
   */
  findByCountry(id: number){
    return this.http.get<any>(environment.baseUrl2 + '/country/regions_name/{id}' + id);
  }

  /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<any[]> {

    let queryParams = {};

    queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/country/p_regions/'+ data['country'], queryParams);
  }

   /**
   * get a list of active object
   */
  getIdAndName(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/region/names');
  }

}
