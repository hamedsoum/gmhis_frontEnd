import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageList } from 'src/app/_models/page-list.model';
import { environment } from 'src/environments/environment';
import { Admission } from '../model/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  supervisory(examinationID: number):Observable<Admission>{   
    return this.http.put<Admission>(`${this.apiUrl}/admission/supervisory/${examinationID}`, null )
  }

  updateExaminationTakeCare(examinationID : number, takeCare : boolean):Observable<Admission>{   
    return this.http.put<Admission>(`${this.apiUrl}/admission/update-takeCare/${examinationID}`,  {takeCare : true} )
  }

  findAll(data): Observable<PageList> {    
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('type', data['type'])
        .set('patientExternalId', data['patientExternalId'])
        .set('admissionNumber', data['admissionNumber'])
        .set('admissionStatus', data['admissionStatus'])
        .set('firstName', data['firstName'] ?? '')
        .set('lastName', data['lastName'] ?? '')
        .set('cellPhone', data['cellPhone'] ?? '')
        .set('cnamNumber', data['cnamNumber'] ?? '')
        .set('idCardNumber', data['idCardNumber'] ?? '')
        .set('practician', data['practician'] ?? '')
        .set('service', data['service'] ?? '')
        .set('act', data['act'] ?? '')
        .set('facilityId', data["faciliTyId"] ?? '')
        .set('fromDate', data['fromDate'] ?? '')
        .set('toDate', data['toDate'] ?? '')
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(
      `${this.apiUrl}/admission/p_list`,
      queryParams
    );
  }

  findAdmissionQueue(data: object): Observable<PageList> {

    let queryParams = {};
    queryParams = {
      params: new HttpParams()
      .set('takeCare', data['takeCare'] ?? false)
        .set('patientExternalId', data['patientExternalId'])
        .set('firstName', data['firstName'] ?? '')
        .set('lastName', data['lastName'] ?? '')
        .set('cellPhone', data['cellPhone'] ?? '')
        .set('practician', data['practician'] ?? '')
        .set('service', data['service'] ?? '')
        .set('act', data['act'] ?? '')
        .set('fromDate', data['fromDate'] ?? '')
        .set('toDate', data['toDate'] ?? '')
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort'])
       
    };

    return this.http.get<PageList>(environment.apiUrl + '/admission/queue/p_list', queryParams);

  }

  findAdmission(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admission/p_list`);
  }

  createAdmission(admission: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admission`, admission);
  }

  updateAdmission(admission: any): Observable<any> {    
    return this.http.put<any>(
      `${this.apiUrl}/admission/${admission.id}`,
      admission
    );
  }

  revokeAdmission(admissionId: number): Observable<any> {return this.http.delete<any>(`${this.apiUrl}/admission/delete/${admissionId}`);}

  getAdmissionDetail(admission: Admission): Observable<Admission> {
    return this.http.get<Admission>(`${this.apiUrl}/admission/get-detail/${admission.id}`);
  }

  retrieve(admissionID: number): Observable<Admission> {
    
    return this.http.get<Admission>(`${this.apiUrl}/admission/get-detail/${admissionID}`);
  }
}
