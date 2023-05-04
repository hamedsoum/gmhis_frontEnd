import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleLocation } from '../_models/articleLocation.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleLocationService {

 
  constructor(private http: HttpClient) { }

   /**
   *  POST: add a new object to the database 
   */
    save(articleLocation: ArticleLocation): Observable<ArticleLocation> {
      return this.http.post<ArticleLocation>(environment.baseUrl2 + '/article-location/add', articleLocation);
      
    }

    /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ArticleLocation> {
    return this.http.put<ArticleLocation>(environment.baseUrl2 + '/article-location/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
   findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/article-location/list');
  }

  findAllByPage(data): Observable<any[]> {
    let queryParams = {};
     data['active']= (data['active'] == null) ? '' : data['active'];

     queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('active', data['active'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/article-location/p_list', queryParams);
  }

   /**
   * get a list of active object
   */
    findActive(): Observable<any[]> {
      return this.http.get<any[]>(environment.baseUrl2 + '/article-location/active_list');
    
      }
    
      /**
       * enable a object
       */
      enable(id) : Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/article-location/enable/' + id);
     
      }
    
      /**
       * disable a object
       */
      disable(id) : Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article-location/disable/' + id);
      }
    
      /**
       * get object by id
       * @param id 
       */
      findById(id: number): Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article-location/detail/' + id);
      }
    
      /**
       * get a list of object
       */
      getIdAndName(): Observable<any> {
          return this.http.get<any>(environment.baseUrl2 + '/article-location/active_locations_name');
        }
}
