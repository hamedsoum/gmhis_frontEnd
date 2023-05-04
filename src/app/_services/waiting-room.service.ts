import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WaitingRoom } from '../_models/waitingRoom.model';

@Injectable({
  providedIn: 'root'
})
export class WaitingRoomService {

  constructor( private http: HttpClient) { }
   
  /**
   *  POST: add a new object to the database 
   */
  save(waitingRoom: WaitingRoom): Observable<WaitingRoom> {
    return this.http.post<WaitingRoom>(environment.baseUrl2 + '/waiting-room/add', waitingRoom);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<WaitingRoom> {
    return this.http.put<WaitingRoom>(environment.baseUrl2 + '/waiting-room/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<WaitingRoom[]> {
    return this.http.get<WaitingRoom[]>(environment.baseUrl2 + '/waiting-room/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<WaitingRoom[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
      //  data['deleted']= (data['deleted'] == null) ? '' : data['deleted'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<WaitingRoom[]>(environment.baseUrl2 + '/waiting-room/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<WaitingRoom[]> {
  return this.http.get<WaitingRoom[]>(environment.baseUrl2 + '/waiting-room/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<any> {
  return this.http.get<any>(environment.baseUrl2 + '/waiting-room/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/waiting-room/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/waiting-room/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/waiting-room/active_waitingRooms_name');
    }

}
