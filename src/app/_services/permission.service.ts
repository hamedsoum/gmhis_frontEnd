import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permission } from '../_models/permission.model';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {


  constructor(
    private http: HttpClient,
  ) {}



  /**
    *  POST: add a new object to the database 
    */
  save(permission: Permission): Observable<Permission> {
    return this.http.post<Permission>(environment.baseUrl2 + '/permission/add', permission);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(permission: Permission): Observable<Permission> {
    return this.http.put<Permission>(environment.baseUrl2 + '/permission/update/' + permission.id, permission);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/permission/list');
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<Permission> {
    return this.http.get<Permission>(environment.baseUrl2 + '/permission/detail/' + id);
  }

  /**
   * find permissions by menu id and role id
   * @param menu_id 
   * @param role_id 
   */
  findByRoleAndMenu(menu_id: number, role_id: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(environment.baseUrl2 + '/permission/list_menu_role/' + menu_id + '/' + role_id);
  }

  /**
   * find permissions by menu id
   * @param menu_id 
   */
  findByMenu(menu_id: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(environment.baseUrl2 + '/permission/list_menu/' + menu_id);
  }

  /**
   * find permissions by role id
   * @param role_id 
   */
  findByRole(role_id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/permission/list_role/' + role_id);
  }

  /**
   * check if user's permissions includes  a specific permission
   * @param menu 
   */
  can(menu) {
    return null

  }

}
