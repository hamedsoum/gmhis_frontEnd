import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ArticleSupplier } from '../_models/articleSupplier.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleSupplierService {

  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(articlesupplier: ArticleSupplier): Observable<ArticleSupplier> {
    return this.http.post<ArticleSupplier>(environment.baseUrl2 + '/article-supplier/add', articlesupplier);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<ArticleSupplier> {
    return this.http.put<ArticleSupplier>(environment.baseUrl2 + '/article-supplier/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<ArticleSupplier[]> {
    return this.http.get<ArticleSupplier[]>(environment.baseUrl2 + '/article-supplier/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<ArticleSupplier[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
        data['country']= (data['country'] == null) ? '' : data['country'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('contact', data['contact'])
                                              .set('country', data['country'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<ArticleSupplier[]>(environment.baseUrl2 + '/article-supplier/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<ArticleSupplier[]> {
  return this.http.get<ArticleSupplier[]>(environment.baseUrl2 + '/article-supplier/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<ArticleSupplier> {
  return this.http.get<ArticleSupplier>(environment.baseUrl2 + '/article-supplier/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<ArticleSupplier> {
    return this.http.get<ArticleSupplier>(environment.baseUrl2 + '/article-supplier/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<ArticleSupplier> {
    return this.http.get<ArticleSupplier>(environment.baseUrl2 + '/article-supplier/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/article-supplier/active_suppliers_name');
    }


}
