import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {

  
  constructor( private http: HttpClient) { }

  /**
   * get a list  of objects
   */
  findByDistrict(id: number){
    return this.http.get<any>(environment.baseUrl2 + '/district/localities_name/{id}' + id);
  }

   /**
   * get a list  of objects
   */
  findByCity(id: number){
    return this.http.get<any>(environment.baseUrl2 + '/city/localities_name/' + id);
  }

  /**
   * get a paginated list of object
   */
  findAllPage(data): Observable<any[]> {

    let queryParams = {};

    data['district']= (data['district'] == null) ? '' : data['district'];
    data['city']= (data['city'] == null) ? '' : data['city'];

    queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('district', data['district'])
                                            .set('city', data['city'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/locality/p_all/', queryParams);
  }

  /**
   * get a paginated list of object
   */
  findAllPageByCity(data): Observable<any[]> {

    let queryParams = {};

    queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/city/p_localities/'+ data['city'], queryParams);
  }

  /**
   * get a paginated list of object
   */
  findAllPageByDistrict(data): Observable<any[]> {

    let queryParams = {};

    queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/district/p_districts/'+ data['district'], queryParams);
  }
}
