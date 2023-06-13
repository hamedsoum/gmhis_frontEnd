import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExamination } from '../models/examination';
import { IExaminationDto } from '../models/examination-dto';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  private readonly apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}



  retrieveLastExamination(admissionID:number):Observable<boolean>{
    return this.http.get<boolean>(`${this.apiUrl}/patient/last_consultation/${admissionID}`);
  }

  AdmissionNoHaveExamination(patientID:number):Observable<boolean>{
    return this.http.get<boolean>(`${this.apiUrl}/examination/findPatientExaminationsOfLastAdmission/${patientID}`);
  }
  retrieveDayNumberBetweenAdmissionFirstExaminationAndCurrentDate(admissionID: number): Observable<number> {    
    return this.http.get<number>(`${this.apiUrl}/examination/firstExaminationDayNumber/${admissionID}`);
  }

  createExamination(examinationDto: IExaminationDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/examination/add`, examinationDto);
  }

  updateExamination(examinationDto : IExamination):Observable<IExaminationDto>{    
    let data  = {
      diagnostic : examinationDto.conclusion
      }
    return this.http.put<IExaminationDto>(`${this.apiUrl}/examination/update-diagnostic/${examinationDto.id}`, data)
  }

  getPatientExamination(data): Observable<any> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('patient', data['patient'])
        .set('admissionID', data['admissionID'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };
    return this.http.get<any>(
      `${this.apiUrl}/examination/p_list/by_patient`,
      queryParams
    );
  }

  findPatientFirstExaminationsOfAdmisions(data): Observable<any> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('patient', data['patient'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };
    return this.http.get<any>(
      `${this.apiUrl}/examination/lastExaminatonOfAdmission`,
      queryParams
    );
  }

  getExaminationNumberByAdmissionId(admissionId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/examination/getPatientExaminationNumber/${admissionId}`);
  }

}
