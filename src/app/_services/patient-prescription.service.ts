import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientPrescription } from '../_models/patientPrescription.model';
import { dateOutputFormat } from '../_utility/date/date-output-format';

@Injectable({
  providedIn: 'root'
})
export class PatientPrescriptionService {


  constructor(private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(prescription: PatientPrescription): Observable<PatientPrescription> {
    return this.http.post<PatientPrescription>(environment.baseUrl2 + '/patient-prescription/add', prescription);
  }

   /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
    update(data): Observable<PatientPrescription> {
      return this.http.put<PatientPrescription>(environment.baseUrl2 + '/patient-prescription/update/' + data.id, data);
    }

  /**
 * get a paginated list of object
 */
  findAllByPatientAndPage(data): Observable<any[]> {
    let queryParams = {};

    queryParams = {
      params: new HttpParams().set('patientId', data['patientId'])
        .set('page', data['page'])
    };

    return this.http.get<PatientPrescription[]>(environment.baseUrl2 + '/patient-prescription/p_list', queryParams);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<PatientPrescription> {
    return this.http.get<PatientPrescription>(environment.baseUrl2 + '/patient-prescription/detail/' + id);
  }

  /**
 * get a paginated list of object
 */
  findAllPage(data): Observable<any[]> {
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

    return this.http.get<any[]>(environment.baseUrl2 + '/patient-prescription/all_page', queryParams);
  }

  /**
   * 
   */
  servePrescription(prescription): Observable<any> {
    return this.http.put<any>(environment.baseUrl2 + '/prescription/update/' + prescription.id, prescription);
  }

  /**
   * generate prescription document
   */
  generatePdf(prescription: object, patientTag: any) {

    var doc = new jsPDF('p', 'pt', 'a5');
    var patient = prescription['patient'];
    var practician = prescription['practician'];
    var drugs = JSON.parse(prescription['drugs']);


    if (prescription) {

      // doc variable
      var date = dateOutputFormat(prescription['date']);
      var patientFullName = patient['firstName'] + ' ' + patient['maidenName'] + ' ' + patient['lastName'];
      var patientNumber = patient['patientExternalId'];
      var cellPhone = patient['cellPhone1'] + ' ' + patient['cellPhone2'];
      var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
      var footer = environment.documentFooter;

      //doc head
      doc.addImage(environment.logo, "JPEG", 25, 15, 60, 60);
      doc.setFontSize(10);
      doc.setFont("bold");
      doc.addImage(patientTag['src'], 'JPEG', 230, 30, 170, 50);

      //information
      doc.setFontSize(10);
      doc.text(patientNumber, 260, 80);
      doc.text("Date:" + date, 15, 120)

      doc.text("patient: " + patientFullName, 15, 140);
      doc.text("Télephone: " + cellPhone, 15, 160);
      // doc.text("Médécin: " + practicianFullName, 15, 160);
      doc.setFontSize(12);
      doc.setFont('times', 'bold')
      doc.text("Ordonance médical: ", 150, 190);
      doc.setLineWidth(1)
      doc.line(250, 192, 150, 192)
      doc.setFontSize(10);

      for (let index = 0; index < drugs.length; index++) {

        const element = drugs[index];

        var drug = element['drug'];
        var qty = element['qty'];
        var duration = element['duration'];
        var dosage = element['dosage'];

        if (qty) drug = drug + ' - ' + qty;
        if (duration) drug = drug + ' - ' + duration;
        doc.setFont('times', 'bold')
        doc.text("- " + drug, 15, 220 + index * 35);
        doc.setFont('times', 'italic')
        if (dosage) doc.text(dosage, 15, 235 + index * 35);
      }

      doc.setFont('times', 'bold')
      doc.text("Médécin: ", 200, 220 + drugs.length * 35);
      doc.text(practicianFullName, 200, 230 + drugs.length * 35);
      doc.setTextColor(150)
      doc.setFontSize(8);
      doc.setLineWidth(0.25)
      doc.line(390, 530, 25, 530)
      var splitFooter = doc.splitTextToSize(footer, 360);
      doc.text(splitFooter, 25, 540);
      doc.setTextColor(0, 0, 0)
      doc.text(" Arrêté la présente facture à la somme de : " + 1200, 25, 730);

    }

    return doc;
  }
}
