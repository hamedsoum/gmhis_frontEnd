import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../_models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticeService {
  

  constructor(private http:HttpClient) { }

  
   /**
   *  POST: add a new object to the database 
   */

   save(article:Article):Observable<Article>{
     return this.http.post<Article>(environment.baseUrl2 + '/article/add', article)
   }

   
    /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Article> {
    return this.http.put<Article>(environment.baseUrl2 + '/article/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
   findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/article/list');
  }

  findAllByPage(data): Observable<any[]> {
    let queryParams = {};
     data['active']= (data['active'] == null) ? '' : data['active'];
     data['supplier']= (data['supplier'] == null) ? '' : data['supplier'];
     data['group']= (data['group'] == null) ? '' : data['group'];
     queryParams = { params: new HttpParams().set('page', data['page'])
                                            .set('size', data['entries'])
                                            .set('name', data['name'])
                                            .set('reference', data['reference'])
                                            .set('supplier', data['supplier'])
                                            .set('group', data['group'])
                                            .set('active', data['active'])
                                            .set('sort', data['sort']+','+data['order'])
  };
    return this.http.get<any[]>(environment.baseUrl2 + '/article/p_list', queryParams);
  }

   /**
   * get a list of active object
   */
    findActive(): Observable<any[]> {
      return this.http.get<any[]>(environment.baseUrl2 + '/article/active_list');
    
      }
    
      /**
       * enable a object
       */
      enable(id) : Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/article/enable/' + id);
     
      }
    
      /**
       * disable a object
       */
      disable(id) : Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article/disable/' + id);
      }
    
      /**
       * get object by id
       * @param id 
       */
      findById(id: number): Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article/detail/' + id);
      }
    
      /**
       * get a list of object
       */
      getIdAndName(): Observable<any> {
          return this.http.get<any>(environment.baseUrl2 + '/article/names');
        }
}
