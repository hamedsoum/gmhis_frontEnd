import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from "@angular/common/http";
import { AdmissionInvoice } from "./../_models/admissionInvoice.model";
import jsPDF from 'jspdf';
import { dateOutputFormat } from '../_utility/date/date-output-format';

@Injectable({
  providedIn: 'root'
})
export class AdmissionInvoiceService {

  constructor (
    private http: HttpClient
  ) { }


  /**
  *  POST: add a new object to the database 
  */
  save(invoice: AdmissionInvoice): Observable<AdmissionInvoice> {
    return this.http.post<AdmissionInvoice>(environment.baseUrl2 + '/bill/add', invoice);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(invoice: AdmissionInvoice): Observable<AdmissionInvoice> {

    return this.http.put<AdmissionInvoice>(environment.baseUrl2 + '/bill/update/' + invoice.id, invoice);
  }

  /**
    *  POST: get the bill cost 
    */
  getCost(invoice: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl2 + '/bill/get_cost', invoice);
  }

  /** 
   * DELETE: delete the hero from the server 
   */
  delete(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl2 + '/bill/delete/' + id);
  }

  /**
   * get a list of object
   */
  findAll(data: object): Observable<any[]> {

    let queryParams = {};

    data['practician'] = (data['practician'] == null) ? '' : data['practician'];
    data['insurance'] = (data['insurance'] == null) ? '' : data['insurance'];
    data['subscriber'] = (data['subscriber'] == null) ? '' : data['subscriber'];
    data['convention'] = (data['convention'] == null) ? '' : data['convention'];
    data['patientType'] = (data['patientType'] == null) ? '' : data['patientType'];
    data['act'] = (data['act'] == null) ? '' : data['act'];

    queryParams = {
      params: new HttpParams().set('billNumber', data['billNumber'])
        .set('admissionNumber', data['admissionNumber'])
        .set('firstName', data['firstName'])
        .set('lastName', data['lastName'])
        .set('patientExternalId', data['patientExternalId'])
        .set('cellPhone', data['cellPhone'])
        .set('cnamNumber', data['cnamNumber'])
        .set('idCardNumber', data['idCardNumber'])
        .set('convention', data['convention'])
        .set('patientType', data['patientType'])
        .set('insurance', data['insurance'])
        .set('subscriber', data['subscriber'])
        .set('act', data['act'])
        .set('fromDate', data['fromDate'])
        .set('toDate', data['toDate'])
        .set('size', data['size'])
        .set('page', data['page'])
        .set('billStatus', data['invoiceStatus'])
        .set('sort', data['sort'] + ',' + data['order'])
    };

    return this.http.get<any[]>(environment.baseUrl2 + '/bill/p_list', queryParams);

  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/bill/detail/' + id);
  }

  /**
  *  POST: collect the bill amount 
  */
  collectAmount(payment: Object): Observable<any> {
    return this.http.post<any>(environment.baseUrl2 + '/bill/collect/', payment);
  }

  /**
     * get object by id
     * @param id 
     */
  findNomCollectedBillByAdmission(admission_id: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl2 + '/bill/non-collected/' + admission_id);
  }

  /**
   * get a list of object
   */
  getActCost(data: object): Observable<any[]> {

    let queryParams = {};
    data['convention'] = (data['convention'] == null) ? '' : data['convention'];

    queryParams = {
      params: new HttpParams()
        .set('conventionId', data['convention'])
        .set('actId', data['act'])
    };

    return this.http.get<any[]>(environment.baseUrl2 + '/bill/get-act-cost', queryParams);

  }

  /**
   * generate invoice document
   */
  generatePdf(invoice: object, patientTag: any) {
    var doc = new jsPDF('p', 'pt', 'a4');
    var patient = invoice['patient'];
    var insured = invoice['insured'];
    var insurance = invoice['insurance'] ? invoice['insurance']['name'] : '';
    var subscriber = invoice['subscriber'] ? invoice['subscriber']['name'] : '';
    var patientAddress = patient['patientAddresses'].find(e => e.currentAddress === 'Y');
    var acts = invoice['billActs'];
    var discount = invoice['discountInCfa'] ? invoice['discountInCfa'] : invoice['discountInPercentage'] + ' %';
    var principalInsured = insured ? insured['principalInsuredName'] : '';
var coverage = insured ? insured['coverage'] : 0;

    if (invoice) {

      // doc variable
      var date = dateOutputFormat(invoice['date']);;
      var patientNumber = patient['patientExternalId'];
      var footer = environment.documentFooter;

      //doc head
      doc.addImage(environment.logo, "JPEG", 25, 15, 60, 60);
      doc.setFontSize(10);
      doc.setFont("bold");
      // doc.addImage(patientTag['src'], 'JPEG', 380, 30, 170, 50);

      //information
      doc.setFontSize(10);
      doc.text(patientNumber, 430, 80);

      doc.setFontSize(14);
      doc.setFont("times", "bold");
      doc.text("FACTURE N°: " + invoice['billNumber'], 160, 120)
      doc.text("Date: " + dateOutputFormat(invoice['createdAt']), 450, 120)

      doc.setFontSize(12);
      doc.setFont("times", "normal");
     
      doc.text("Etab. payeur / Sociétaire : ", 25, 150);
      doc.setFillColor(245, 245, 245)
      doc.rect(160, 138, 400, 20, 'F')
      doc.text(subscriber, 170, 150);

      doc.text("Patient: ", 25, 175);
      doc.setFillColor(245, 245, 245)
      doc.rect(160, 162, 400, 20, 'F')
      doc.text(patient['firstName'] + " " + patient['maidenName'] + patient['lastName'], 170, 175);

      doc.text("Adresse: ", 25, 200);
      doc.setFillColor(245, 245, 245)
      doc.rect(160, 185, 400, 20, 'F')
      doc.text(patientAddress['address'], 170, 200);

      doc.text("Assuré: ", 25, 225);
      doc.setFillColor(245, 245, 245)
      doc.rect(160, 210, 400, 20, 'F')
      doc.text(principalInsured , 170, 225);

      doc.text("Nº PEC: ", 25, 250);
      doc.setFillColor(245, 245, 245)
      doc.rect(160, 235, 400, 20, 'F')
      doc.text(" ", 170, 250);
     
       doc.text("Matricule Assuré: ", 25, 275);
      doc.setFillColor(245, 245, 245);
      doc.rect(160, 260, 400, 20, 'F');
      doc.text(insured['cardNumber'], 170, 275);

      doc.rect(25, 290, 535, 300);
      doc.setDrawColor(0, 0, 0);
      doc.setFillColor(245, 245, 245);
      doc.rect(25, 290 , 535, 25, 'F')
      doc.text("Libellé de l'acte", 75, 310);
      doc.text("Nbr/jr", 205, 310);
      doc.text("PU", 252, 310);
      doc.text("Montant", 295, 310);
      doc.text("Praticien", 430, 310);

  //table horizontal line
     for (let index = 0; index < acts.length ; index++) {
       const act = acts[index];
       const actName = act['act']['name'];
       const practician = act['practician']['firstName'] +" "+ act['practician']['lastName'];
        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(0, 0, 0);
        doc.rect(25, 290 + index * 25, 535, 25)
        
        var splitActName = doc.splitTextToSize(actName, 150);
        doc.text(splitActName, 30, 335 + index * 25);
        doc.text(" ", 205, 335 + index * 25);
        doc.text(act['actCost'].toString(), 252, 335 + index * 25);
        doc.text(act['actCost'].toString(), 295, 335 + index * 25);
        var splitPracticianName = doc.splitTextToSize(practician, 150);
        doc.text(splitPracticianName, 360, 335 + index * 25);
      }
      
     // vetical line
      doc.setDrawColor(0, 0, 0);
      doc.line(200, 590, 200, 290);
      doc.line(240, 590, 240, 290);
      doc.line(285, 710, 285, 290);
      doc.line(355, 590, 355, 290);

      doc.setFont("times", "bold");
      doc.rect(25, 590, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Total facture", 35, 605);
      doc.setTextColor(255, 0, 0)
      doc.text(invoice['totalAmount'].toString(), 290, 605);

      doc.rect(25, 610, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Taux de couverture", 35, 625);
      doc.setTextColor(255, 0, 0)
      doc.text(coverage.toString() + ' %', 290, 625);

      doc.rect(25, 630, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Part prise en charge (PEC", 35, 645);
      doc.setTextColor(255, 0, 0)
      doc.text(invoice['partTakenCareOf'].toString(), 290, 645);

      doc.rect(25, 650, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Remise", 35, 665);
      doc.setTextColor(255, 0, 0)
      doc.text(discount.toString(), 290, 665);

      doc.rect(25, 670, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Part adhérent", 35, 685);
      doc.setTextColor(255, 0, 0)
      doc.text(invoice['patientPart'].toString(), 290, 685);

      doc.rect(25, 690, 330, 20);
      doc.setTextColor(0, 0, 0)
      doc.text("Net à payer", 35, 705);
      doc.setTextColor(255, 0, 0)
      doc.text(invoice['patientPart'].toString(), 290, 705);

      doc.setTextColor(0, 0, 0)
      doc.text("Arrêté la présente facture à la somme de : " + invoice['patientPart'].toString() + " " + environment.devise, 25, 730);
      
      doc.setFont("times", "normal");
      doc.setTextColor(150)
      doc.setFontSize(8);
      doc.setLineWidth(0.25)
      doc.line(552, 800, 25, 800)
      var splitFooter = doc.splitTextToSize(footer, 540);
      doc.text(splitFooter, 25, 810);

    }

    return doc;
  }


}
