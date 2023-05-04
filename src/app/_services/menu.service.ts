import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../_models/menus.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * get Menus
   */
  findAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(environment.baseUrl2 + '/menu/menu_names_perm')
  }

  /**
   * get actives menus names
   */
  findActive(): Observable<Menu[]> {
    return this.http.get<Menu[]>(environment.baseUrl2 + '/menu/menu_names')
  }
}
