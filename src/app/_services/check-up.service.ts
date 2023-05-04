import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckUp } from '../_models/checkUp.model';
import { dateOutputFormat } from '../_utility/date/date-output-format';

@Injectable({
  providedIn: 'root'
})
export class CheckUpService {
  
  constructor( private http: HttpClient) { }

  /**
   *  POST: add a new object to the database 
   */
  save(checkUp: CheckUp): Observable<CheckUp> {
    return this.http.post<CheckUp>(environment.baseUrl2 + '/check-up/add', checkUp);
  }

  /** 
   * PUT: update the object on the server. Returns the updated objet upon success. 
   */
  update(data): Observable<CheckUp> {
    return this.http.put<CheckUp>(environment.baseUrl2 + '/check-up/update/' + data.id, data);
  }

  /**
   * get a list of object
   */
  findAll(): Observable<CheckUp[]> {
    return this.http.get<CheckUp[]>(environment.baseUrl2 + '/check-up/list');
  }

    /**
   * get a paginated list of object
   */
  findAllByPage(data): Observable<CheckUp[]> {
      let queryParams = {};
       data['active']= (data['active'] == null) ? '' : data['active'];
  
      queryParams = { params: new HttpParams().set('page', data['page'])
                                              .set('size', data['entries'])
                                              .set('name', data['name'])
                                              .set('active', data['active'])
                                              .set('sort', data['sort']+','+data['order'])
    };
      return this.http.get<CheckUp[]>(environment.baseUrl2 + '/check-up/p_list', queryParams);
    }
    
  /**
   * get a list of active object
   */
  findActive(): Observable<CheckUp[]> {
  return this.http.get<CheckUp[]>(environment.baseUrl2 + '/check-up/active_list');

  }

  /**
   * enable a object
   */
  enable(id) : Observable<CheckUp> {
  return this.http.get<CheckUp>(environment.baseUrl2 + '/check-up/enable/' + id);
 
  }

  /**
   * disable a object
   */
  disable(id) : Observable<CheckUp> {
    return this.http.get<CheckUp>(environment.baseUrl2 + '/check-up/disable/' + id);
  }

  /**
   * get object by id
   * @param id 
   */
  findById(id: number): Observable<CheckUp> {
    return this.http.get<CheckUp>(environment.baseUrl2 + '/check-up/detail/' + id);
  }

  /**
   * get a list of object
   */
  getIdAndName(): Observable<any> {
      return this.http.get<any>(environment.baseUrl2 + '/check-up/active_name');
    }

 /**
   * generate analysis request document
   */
  generatePdf(checkUp : object,  patientTag : any) {
    var doc = new jsPDF('p', 'pt', 'a5');
    var patient = checkUp['patient'];
    var practician = checkUp['practician'];
    var pc = checkUp['checkUp'];
      
          if(checkUp){
  
           // doc variable
            var date = dateOutputFormat(checkUp['date']);
            var patientFullName =  patient['firstName'] +' ' + patient['maidenName'] +' '+ patient['lastName'];
            var patientNumber = patient['patientExternalId'];
            var birthDate = dateOutputFormat(patient["birthDate"]);
            var cellPhone = patient['cellPhone1'] +' - ' + patient['cellPhone2'];
            var practicianFullName = practician['firstName'] + ' ' + practician['lastName'];
            var footer = environment.documentFooter; 
        
          //     //doc head
            doc.addImage(environment.logo, "JPEG", 25, 15, 60, 60);
            doc.setFontSize(10);
            doc.setFont("bold");
            doc.addImage(patientTag['src'], 'JPEG', 230 , 30, 170, 50);
  
            //information
            doc.setFontSize(10);
            doc.text(patientNumber, 260, 80);
            doc.text("Date:" + date, 15, 120)
            doc.text("patient: "+ patientFullName, 15,140);
            doc.text("Télephone: "+ cellPhone, 15,160);
            doc.text("Médécin: " + practicianFullName, 15, 180);
            doc.setFontSize(12);
            doc.setFont("bold");
            doc.text( pc['name'] + ": ", 150, 220);
        
            doc.setFontSize(10);
            for (let index = 0; index < pc["acts"].length; index++) {
              doc.text("- " + pc['acts'][index]['name'], 15, 250 + index * 20);
            }
        
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
