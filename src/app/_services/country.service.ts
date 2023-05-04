import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../_models/country.model';
import { City } from '../_models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }


  /**
   * get a list of all object
   */
  findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.baseUrl2 + '/country/all');
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<Country[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('name', data['name'])
        .set('sort', data['sort'] + ',' + data['order'])
    };
    return this.http.get<Country[]>(environment.baseUrl2 + '/country/p_all', queryParams);
  }

  /**
   * get a list of active object
   */
  getIdAndName(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.baseUrl2 + '/country/names');
  }

}
