import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageList } from '../_models/page-list.model';
import { GMHISNameAndID as NameAndId } from 'src/app/shared/models/name-and-id';


@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  updatePatientSetDeathDate(patientID: number, deathDate: string): Observable<any> {        
    return this.http.put<any>(`${this.apiUrl}/patient/death/${patientID}`,deathDate);
  }

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('patientExternalId', data['patientExternalId'].trim() )
        .set('firstName', data['firstName'].trim() ?? '')
        .set('lastName', data['lastName'].trim() ?? '')
        .set('cellPhone', data['cellPhone'].trim() ?? '')
        .set('idCardNumber', data['idCardNumber'].trim() ?? '')
        .set('correspondant', data['correspondant'].trim() ?? '')
        .set('emergencyContact', data['emergencyContact'].trim() ?? '')
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(
      `${this.apiUrl}/patient/p_list`,
      queryParams
    );
  }

  findPatient(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patient/patients`);
  }

  create(patient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/patient/add`, patient);
  }

  update(patient: any): Observable<any> {    
    return this.http.put<any>(`${this.apiUrl}/patient/update/${patient.id}`,patient);
  }

  retrieve(patient: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patient/detail/${patient}`);
  }

  getCountries(): Observable<NameAndId[]> {
    return this.http.get<NameAndId[]>(`${this.apiUrl}/country/names`);
  }

  getCities(countryID: number): Observable<any[]> {
    return this.http.get<NameAndId[]>(
      `${this.apiUrl}/country/cities_name/${countryID}`
    );
  }

  
}
