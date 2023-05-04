import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnalysisRequest } from '../_models/analysisRequest.model';
import { dateOutputFormat } from '../_utility/date/date-output-format';

@Injectable({
  providedIn: 'root'
})
export class AnalysisRequestService {

  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(analysisRequest: AnalysisRequest): Observable<AnalysisRequest> {
    return this.http.post<AnalysisRequest>(environment.baseUrl2 + '/analysis-request/add', analysisRequest);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<AnalysisRequest> {
    return this.http.put<AnalysisRequest>(environment.baseUrl2 + '/analysis-request/update/' + data.id, data);
  }

  /**
   * get a paginated list of object
   */
  findAllByPatientAndPage(data): Observable<AnalysisRequest[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('patientId', data['patientId'])
        .set('page', data['page'])
        .set('size', data['size'])
        .set('sort', data['sort'] + ',' + data['order'])
    };

    return this.http.get<AnalysisRequest[]>(environment.baseUrl2 + '/analysis-request/p_list', queryParams);
  }

  /**
   * get a paginated list of object
   */
  findAllPage(data): Observable<AnalysisRequest[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('page', data['page'])
        .set('size', data['entries'])
        .set('cnamNumber', data['cnamNumber'])
        .set('idCardNumber', data['idCardNumber'])
        .set('firstName', data['firstName'])
        .set('lastName', data['lastName'])
        .set('patientExternalId', data['patientExternalId'])
        .set('cellPhone', data['cellPhone'])
        .set('state', data['state'])
        .set('sort', data['sort'] + ',' + data['order'])
    };

    return this.http.get<AnalysisRequest[]>(environment.baseUrl2 + '/analysis-request/all_page', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<AnalysisRequest> {
    return this.http.get<AnalysisRequest>(environment.baseUrl2 + '/analysis-request/detail/' + id);
  };

  /** 
  * performed analysis. Returns the updated objet upon success. 
  */
  setPerformed(id): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/analysis-request/performed/' + id);
  }

  /**
   * generate analysis request document
   */
  generatePdf(analysisRequest: object, room: string, patientTag: any) {
    var doc = new jsPDF('p', 'pt', 'a5');

    if (analysisRequest) {

      // doc variable
      var date = dateOutputFormat(analysisRequest['date']);
      var patientFullName = analysisRequest['patientFirstName'] + ' ' + analysisRequest['patientMaidenName'] + ' ' + analysisRequest['patientLastName'];
      var patientNumber = analysisRequest['patientExternalId'];
      var birthDate = dateOutputFormat(analysisRequest["patientBirthDate"]);
      var cellPhone = analysisRequest['patientCellPhone1'] + ' ' + analysisRequest['patientCellPhone2'];
      var practicianFullName = analysisRequest['practicianFirstName'] + ' ' + analysisRequest['practicianLastName'];
      var analysis = analysisRequest['analysis'].split(',');
      var footer = environment.documentFooter;
      var performededAt = dateOutputFormat(analysisRequest['performedAt']);
      var performedByFullName = analysisRequest['performedByFirstName'] + ' ' + analysisRequest['performedByLastName'];


      //doc head
      doc.addImage(environment.logo, "JPEG", 25, 15, 60, 60);
      doc.setFontSize(10);
      doc.setFont("bold");
      doc.text("Laboratoire d'analyses médicales 24h/24", 230, 30);
      doc.addImage(patientTag['src'], 'JPEG', 230, 30, 150, 50);

      //information
      doc.setFontSize(10);
      doc.text(patientNumber, 260, 80);
      doc.text("Date:" + date, 15, 120)
      doc.text("Chambre: " + room, 250, 120);
      doc.text("Date de naissance: " + birthDate, 15, 140);
      doc.text("Télephone: " + cellPhone, 250, 140);
      doc.text("Prélèvement effectué par: " + performedByFullName, 15, 160);
      doc.text("Prélèvement effectué à : " + performededAt, 250, 160);
      doc.text("patient: " + patientFullName, 15, 180);
      doc.text("Médécin: " + practicianFullName, 15, 200);
      doc.setFontSize(12);
      doc.text("Analyses: ", 150, 220);
      doc.setLineWidth(1)
      doc.line(200, 222, 150, 222)

      doc.setFontSize(10);
      var splitAnalysis = doc.splitTextToSize(analysis.join(", ") + ', ' + analysisRequest['otherAnalysis'], 360);
      doc.text("- " + splitAnalysis, 15, 250);
      doc.setTextColor(150)
      doc.setFontSize(8);
      doc.setLineWidth(0.25)
      doc.line(390, 530, 25, 530)
      var splitFooter = doc.splitTextToSize(footer, 360);
      doc.text(splitFooter, 25, 540);

    }

    return doc;
  }
}
