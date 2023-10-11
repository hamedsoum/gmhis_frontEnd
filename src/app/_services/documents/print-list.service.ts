import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PracticianPrintDataFormat } from 'src/app/invoice/invoice';
import { User } from 'src/app/_models';
import { UserService } from '..';

@Injectable({
  providedIn: 'root'
})
export class PrintListService {
  constructor(private datePipe: DatePipe, private userService : UserService) { }
  private getUser(): User {    
    return this.userService.getUserFromLocalCache();
  }
   user = this.getUser();
  buildPrintList(practicianPrint: PracticianPrintDataFormat, practicianBill? : boolean) {
    
    let practicianBillHeader = ['Date op.', 'N° Facture','Practicien','N° Patient', 'Total F.','Solde Centre.','Solde Pract.'];
    
    var doc = new jsPDF('p', 'mm', 'a4');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    let facilityName: string = this.user.facility.name;
    doc.text(facilityName.toUpperCase(), 70, 22);

    doc.text('Détails des factures',16, 35);

    doc.setFontSize(9);
    doc.text('Nom du Practicien',18, 45);
    doc.text(`${practicianPrint.practicianName} `,55, 45);
    doc.line(16, 47, 102, 47);

    doc.text('Date de Début',18, 53);
    let dateStart = practicianPrint.dateStart != "##" ? practicianPrint.dateStart : "##";
    doc.text(dateStart,55, 53);
    doc.line(16, 55, 102, 55);

    let dateEnd = practicianPrint.dateEnd != "##" ? practicianPrint.dateEnd : "##";
    doc.text('Date de Fin',18, 61);
    doc.text(dateEnd,55, 61);
    doc.line(16, 63, 102, 63);


    doc.setFontSize(9);
    doc.text('Solde Total',110, 45);
    doc.text(`${practicianPrint.totalBalance} XOF` ,170, 45);
    doc.line(110, 47, 195, 47);

    doc.text('Solde Centre de Santé',110, 53);
    doc.text(`${practicianPrint.facilityBalance} XOF`,170, 53);
    doc.line(110, 55, 195, 55);

    doc.text('Solde Practicien',110, 61);
    doc.text(`${practicianPrint.practicianBalance} XOF`,170, 61);
    doc.line(110, 63, 195, 63);


    var body: any[] = [];

    practicianPrint.data.forEach((insuranceContent: any) => {
      var date = this.datePipe.transform(insuranceContent['date'], 'dd/MM/yyyy');
    
      let practicianBillContents = [
        {content :date },
        { content: insuranceContent['invoiceNumber'] },
        { content: insuranceContent['practicianName']},
        { content: insuranceContent['patientNumber']},
        { content: insuranceContent['amount'], halign: 'left' },
        { content: insuranceContent['amount']/2, halign: 'right' },
        { content: insuranceContent['amount']/2, halign: 'right' },
      ]
     body.push(practicianBillContents);
    });
    autoTable(doc, {
      headStyles: { fillColor: null, textColor : '#000', fontSize: 8 },
      footStyles: { fillColor: '#16a2b8' },
      bodyStyles:{fontSize: 8},
      head: [practicianBill? practicianBillHeader : ['Date op.', 'N° Facture', 'N° Admission', 'Assurance', 'Total Facture', 'Part prise en charge']],
      body: body,
      startY: 70,
    });

    return doc;

    }

}
