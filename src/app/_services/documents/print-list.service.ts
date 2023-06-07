import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PrintListService {
  constructor(
    private datePipe: DatePipe,
  ) { }


  buildPrintList(insurance: any) {
    var printDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    var body: any[] = [];
    insurance.forEach((insuranceContent: any) => {
      var date = this.datePipe.transform(insuranceContent['billDate'], 'dd/MM/yyyy');
      let insuranceContents = [
        {content :date },
        { content: insuranceContent['billNumber'] },
        { content: insuranceContent['admissionNumber'] },
        { content: insuranceContent['InsuranceName'] },
        { content: insuranceContent['BillTotalAmount'] },
        { content: insuranceContent['InsurancePart'] },
      ];
      body.push(insuranceContents);
    });
    var doc = new jsPDF('p', 'mm', 'a4');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);
    doc.text(`Factures d'Assurance`, 60, 11);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(`imprimé le ${printDate}`, 15, 11);
    autoTable(doc, {
      headStyles: { fillColor: '#16a2b8' },
      footStyles: { fillColor: '#16a2b8' },
      head: [['Date de Facturation', 'N° Facture', 'N° Admission', 'Assurance', 'Total Facture', 'Part prise en charge']],
      body: body,
      startY: 20,
    });

    return doc;

    }

}
