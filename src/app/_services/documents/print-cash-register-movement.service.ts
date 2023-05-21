import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PrintCashRegisterMovementService {
  constructor(
    private datePipe: DatePipe,
  ) { }


  buildCashRegisterMovPrintList(cashRegisterMovementData: any) {


    var printDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    var body: any[] = [];
    cashRegisterMovementData.forEach((cashRegisterMovementDataitem: any) => {
      var date = this.datePipe.transform(cashRegisterMovementDataitem['date'], 'dd/MM/yyyy');
      let insuranceContents = [
        {content :date },
        { content: cashRegisterMovementDataitem['libelle'] },
        { content: cashRegisterMovementDataitem['debit'] },
        { content: cashRegisterMovementDataitem['credit'] },
        { content: cashRegisterMovementDataitem['actNumber'] },
        { content: cashRegisterMovementDataitem['createdBy'] },
      ];
      body.push(insuranceContents);
    });
    var doc = new jsPDF('p', 'mm', 'a4');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);
    doc.text(`Mouvement de Caisse`, 60, 11);
 

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(`imprimé le ${printDate}`, 15, 11);

    autoTable(doc, {
      headStyles: { fillColor: '#16a2b8' },
      footStyles: { fillColor: '#16a2b8' },
      head: [['Date', 'Libelle', 'Debit', 'Credit', 'N° Facture', 'Utilisateur']],
      body: body,
      // foot: [
      //   ['Total Part Mutuelle', '', '', '', '', ` FCFA`],
      // ],
      startY: 20,
    });

    return doc;

    }

}
