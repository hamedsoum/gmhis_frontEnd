import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageList } from 'src/app/_models/page-list.model';
import { environment } from 'src/environments/environment';
import { InvoiceCost, InvoiceCreateData } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private readonly apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  calculInvoiceCost( admissionStatus:string, formValue : any, controls : AbstractControl[]) : InvoiceCost{
   console.log(formValue);
   console.log("admissionStatus ==>> " + admissionStatus);
   
    let invoiceFormValue = formValue;
   let remaingAfterCnamReduction = 0;
   let totalInvoice = 0;
   let partPecByOthherInsurance = 0;
   let partientPart = 0;  
   let partPecByCNAM = 0;
    let acts = invoiceFormValue["acts"];   
    acts.forEach((el) => {      
      totalInvoice = totalInvoice  + el["cost"];
    })

    if (admissionStatus == 'B') {
      acts.forEach((el) => {              
        partPecByCNAM += el["costToApplyCNAMInsured"]*controls[0].get('insuredCoverage').value/100;
      })
    }else{
      partPecByCNAM = controls[0].get('costToApplyCNAMInsured').value*controls[0].get('insuredCoverage').value/100;
    }    
    console.log(partPecByCNAM);

    controls[0].get('insuredPart').setValue(partPecByCNAM);
    remaingAfterCnamReduction = totalInvoice - partPecByCNAM;
    if (controls.length > 1) {
        for (let index = 1; index < invoiceFormValue["insuredList"].length; index++) {
          partPecByOthherInsurance = remaingAfterCnamReduction*controls[index].get('insuredCoverage').value/100;
          controls[index].get('insuredPart').setValue(partPecByOthherInsurance);
        }
    }
    partientPart = totalInvoice - (partPecByCNAM + partPecByOthherInsurance) 
    return {totalInvoice, partPecByCNAM, partPecByOthherInsurance,partientPart }
  }

  createInvoice(invoiceCreateData: InvoiceCreateData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bill/add`, invoiceCreateData);
  }

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('billNumber', data['billNumber'])
        .set('lastName', data['lastName'] ?? '')
        .set('firstName', data['firstName'] ?? '')
        .set('admissionNumber', data['admissionNumber'])
        .set('patientExternalId', data['patientExternalId'] ?? '')
        .set('cellPhone', data['cellPhone'] ?? '')
        .set('cnamNumber', data['cnamNumber'] ?? '')
        .set('idCardNumber', data['idCardNumber'] ?? '')
        .set('convention', data['convention'] ?? '')
        .set('insurance', data['insurance'] ?? '')
        .set('subscriber', data['subscriber'] ?? '')
        .set('fromDate', data['fromDate'] ?? '')
        .set('toDate', data['toDate'] ?? '')
        .set('billStatus', data['billStatus'] ?? '')
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(
      `${this.apiUrl}/bill/p_list`,
      queryParams
    );
  }

  findAllInsuranceBil(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('insuranceId', data['insuranceId'] ?? '')
        .set('date', data['date'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(
      `${this.apiUrl}/bill/BillHasInsure_p_list`,
      queryParams
    );
  }

  facilityInvoicesPractician(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('billStatus', data['billStatus'])
        .set('date', data['date'])
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(
      `${this.apiUrl}/bill/facilityInvoicesPractician`,
      queryParams
    );
  }

  getActCost(data: object): Observable<any[]> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('conventionId', data['convention'] ?? '')
        .set('actId', data['act'])
    };

    return this.http.get<any[]>(environment.apiUrl + '/bill/get-act-cost', queryParams);

  }

  getCost(invoice: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/bill/get_cost', invoice);
  }

  collectAmount(payment: Object): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/bill/collect/', payment);
  }

    getInvoiceDetail(invoiceID: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bill/detail/${invoiceID}`);
  }

}


