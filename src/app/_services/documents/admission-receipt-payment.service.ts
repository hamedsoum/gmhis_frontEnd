import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class AdmissionReceiptPaymentService {

  constructor( private datePipe: DatePipe) { }

  buildPdfDocument(admision : any){
    console.log(admision);
    
    var doc = new jsPDF('p', 'mm', 'a5');
    doc.setFontSize(10)
    doc.setFont("arial", "normal")
    doc.text(admision.facilityName, 10, 15);
    doc.text(admision.patientFirstName +" " + admision.patientLastName, 110, 18);
    doc.text("Fait le " + this.datePipe.transform(new Date(), 'dd/MM/yyyy'), 110, 25);

    doc.setFontSize(13);
    doc.text(`Réçu du dépôt de Caution`, 50, 32);
    doc.setFontSize(10)
    doc.setFont("arial", "normal");
    doc.text("Réçu de Monsieur/Madame : ", 10, 40);
    doc.text(`La somme de : ${admision.caution}  FCFA`, 10, 47);

    var splitTitle = doc.splitTextToSize("Pour le montant d'un dépôt de caution pour la prise en charge du patient : " + admision.patientFirstName +" " + admision.patientLastName ,130);
    doc.text(splitTitle,  10,58)

    return doc;


  }
}
