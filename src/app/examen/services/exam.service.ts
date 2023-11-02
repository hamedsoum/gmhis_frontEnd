import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageList } from 'src/app/_models/page-list.model';
import { environment } from 'src/environments/environment';
import { ExamenCreateData } from '../models/exam-dto';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('state', data['state'])
        .set('patientExternalId', data['patientExternalId'])
        .set('analysisNumber', data['analysisNumber'])
        .set('examenType', data['examenType'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('active', data['active'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(`${this.apiUrl}/analysis-request/p_list`, queryParams);
  }

  findAllPatientExame(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('patientId', data['patientId'])
        .set('admissionId', data['admissionId'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('active', data['active'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(`${this.apiUrl}/analysis-request/getPatientAnalysisRequest`, queryParams);
  }

  createExam(examDto: ExamenCreateData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/analysis-request/add`, examDto);
  }

   getexamDetails(examId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/analysis-request/get-detail/${examId}`
    );
  }

  makAsPerformed(examId: string[], examResultDoc : File): Observable<any> {
    let formData = new FormData();
    formData.append("file", examResultDoc);
    formData.append("examId", String(examId));
    return this.http.post<any>(`${this.apiUrl}/analysis-request/performed`, formData);
  }

  getAnalysisRequestNumberByPatientId(patientId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/analysis-request/getanalyseRequestNumber/${patientId}`);
  }

  getAnalysisRequestItemsByAnalysisId(analysisRquestId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/analysis-request/getAnalysisRequestItems/${analysisRquestId}`);
  }

  getAnalysisRequestRquestFiles(analysisRquestId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/analysis-request/getAnalysisRequestResultFile/${analysisRquestId}`);
  }
}
