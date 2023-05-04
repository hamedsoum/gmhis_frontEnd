import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { patientDocument } from '../_models/patientDodument.model';
import { dateOutputFormat } from '../_utility/date/date-output-format';
import { replaceDocVarialbles } from '../_utility/string/replaceDocParms';
import { slugify } from '../_utility/string/slugify';

@Injectable({
  providedIn: 'root'
})
export class PatientCourierService {

  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(document: patientDocument): Observable<patientDocument> {
    return this.http.post<patientDocument>(environment.baseUrl2 + '/patient-courier/add', document);
  }

  /**
 * get a paginated list of object
 */
  findAllByPage(data): Observable<patientDocument[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('patientId', data['patientId'])
        .set('page', data['page'])
    };

    return this.http.get<patientDocument[]>(environment.baseUrl2 + '/patient-courier/p_list', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<patientDocument> {
    return this.http.get<patientDocument>(environment.baseUrl2 + '/patient-courier/detail/' + id);
  }

  /**
   * generate mail document
   */
   generatePdf(mail: object, patientTag: any) {
    var doc = new jsPDF('p', 'pt', 'a4');
    var patient = mail['patient'];
    var practician = mail['practician'];
    var croType = mail['courierType'];

    if (mail) {

      // doc variable
      var date = dateOutputFormat(mail['date']);;
      var patientNumber = patient['patientExternalId'];
      var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
      var footer = environment.documentFooter;

      //doc head
      doc.addImage(environment.logo, "JPEG", 25, 15, 60, 60);
      doc.setFontSize(10);
      doc.setFont("bold");
      doc.addImage(patientTag['src'], 'JPEG', 380, 30, 170, 50);

      //information
      doc.setFontSize(10);
      doc.text(patientNumber, 430, 80);
      doc.text("Date:" + date, 25, 120)

      doc.setFontSize(12);
      doc.setFont('times', 'bold')
      doc.text("Courier: ", 200, 190);
      doc.setLineWidth(1)
      doc.line(250, 192, 200, 192)
      doc.setFontSize(10);

      if (mail['custom_text']) {
        var content = doc.splitTextToSize(mail['custom_text'], 540);
        doc.text(content, 25, 210);
      } else {
        for (let index = 0; index < Object.keys(patient).length; index++) {
          const element = '@@@-' + slugify(Object.keys(patient)[index]) + '-';
          croType['content'] = replaceDocVarialbles(croType['content'], patient, practician);
        }

        // doc.html(croType['content'], {
        //     callback: function (doc) {
        //       doc.output('dataurlnewwindow');
        //     },
        //     x: 25,
        //     y: 210
        //   });

        var content = doc.splitTextToSize(croType['content'], 540);
        doc.text(content, 25, 210);
      }

      doc.setFont('times', 'bold')
      doc.text("Médécin: ", 350, 700);
      doc.text(practicianFullName, 350, 720);
      doc.setTextColor(150)
      doc.setFontSize(8);
      doc.setLineWidth(0.25)
      doc.line(552, 770, 25, 770)
      var splitFooter = doc.splitTextToSize(footer, 540);
      doc.text(splitFooter, 25, 780);

    }

    return doc;
  }
}
