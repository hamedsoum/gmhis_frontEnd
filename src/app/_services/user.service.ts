import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  POST: add a new object to the database 
   */
  save(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl2 + '/account/add', user);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(user: User): Observable<User> {
    return this.http.put<User>(environment.baseUrl2 + '/account/update/' + user.id, user);
  }

  /**
   * get a list of object
   */
  findAll(data: object): Observable<User[]> {

    let queryParams = {};

    data['role'] = (data['role'] == null) ? '' : data['role'];
    data['active'] = (data['active'] == null) ? '' : data['active'];
    data['locked'] = (data['locked'] == null) ? '' : data['locked'];

    queryParams = {
      params: new HttpParams().set('lastName', data['lastName'])
        .set('firstName', data['firstName'])
        .set('role', data['role'])
        .set('phoneContact', data['phoneContact'])
        .set('active', data['active'])
        .set('locked', data['locked'])
        .set('sort', data['sort'] + ',' + data['order'])
        .set('page', data['page'])
        .set('size', data['entries'])
    };
    return this.http.get<User[]>(environment.baseUrl2 + '/account/p_list', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/account/detail/' + id);
  }

  /**
   * get object by username
   * @param id 
   */
  findByUsername(username: string): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/account/detail-by-login/' + username);
  }

  /**
   * disable an object
   * @param user 
   */
  disable(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl2 + '/account/disable/' + user.id, user)
  }

  /**
   * enable an object
   * @param user 
   */
  enable(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl2 + '/account/enable/' + user.id, user);
  }

  /**
   * change user password
   * @param data 
   */
  changePassword(data) {
    return this.http.post(environment.baseUrl2 + '/account/change_password/' + data.userId, data);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/account/users_name');
  }

}
