import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleGroup } from '../_models/articleGroup.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleGroupService {

  constructor(private http: HttpClient) { }

   /**
   *  POST: add a new object to the database 
   */
    save(articleGroup: ArticleGroup): Observable<ArticleGroup> {
      return this.http.post<ArticleGroup>(environment.baseUrl2 + '/article-group/add', articleGroup);
      
    }

    /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ArticleGroup> {
    return this.http.put<ArticleGroup>(environment.baseUrl2 + '/article-group/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
   findAll(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/article-group/list');
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
    return this.http.get<any[]>(environment.baseUrl2 + '/article-group/p_list', queryParams);
  }

   /**
   * get a list of active object
   */
    findActive(): Observable<any[]> {
      return this.http.get<any[]>(environment.baseUrl2 + '/article-group/active_list');
    
      }
    
      /**
       * enable a object
       */
      enable(id) : Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/article-group/enable/' + id);
     
      }
    
      /**
       * disable a object
       */
      disable(id) : Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article-group/disable/' + id);
      }
    
      /**
       * get object by id
       * @param id 
       */
      findById(id: number): Observable<any> {
        return this.http.get<any>(environment.baseUrl2 + '/article-group/detail/' + id);
      }
    
      /**
       * get a list of object
       */
      getIdAndName(): Observable<any> {
          return this.http.get<any>(environment.baseUrl2 + '/article-group/active_groups_name');
        }
}
