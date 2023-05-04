import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { City } from '../_models/city.model';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor( private http: HttpClient) { }

   /**
   * get a list of id and name of objects
   */
  findByCountry(id: number){
    return this.http.get<City>(environment.baseUrl2 + '/country/cities_name/' + id);
  }

  /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<City[]> {

    let queryParams = {};

    queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<City[]>(environment.baseUrl2 + '/country/p_cities/'+ data['country'], queryParams);
  }

  /**
   * get a list of active object
   */
  getIdAndName(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/city/names');
  }
}
