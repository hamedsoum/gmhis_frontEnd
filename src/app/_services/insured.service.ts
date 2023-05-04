import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Insured } from '../_models/insured.model';

@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  constructor(
    private http: HttpClient
  ) { }

  
/**
 * 
 * @param data save insured
 */
  save(insured: object): Observable<Insured>{
    
    return this.http.post<Insured>(environment.baseUrl2+'/insured/add', insured);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<Insured> {
    return this.http.put<Insured>(environment.baseUrl2 + '/insured/update/' + data.id, data);
  }


  /**
   * get patient insurances
   * @param id patient id
   */
  findByPatientId(id: number): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl2 + '/insured/list_by_patient/'+id); 
  }
}
