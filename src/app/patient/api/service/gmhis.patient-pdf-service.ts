import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISCautionTransactionPartial, Patient } from "../../patient";
import autoTable from 'jspdf-autotable';

@Injectable()
export class GMHISPatientPdfService  {

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}


    buildcautionTransactionPdf(transactions: GMHISCautionTransactionPartial[], patient: Patient): jsPDF {
      console.log(transactions);
        var body: any[] = [];

        transactions.forEach((transaction: GMHISCautionTransactionPartial) => {
      var date = this.datePipe.transform(transaction.date, 'dd/MM/yyyy HH:mm:ss');
      let quotationItems = [
        {content :date },
        { content: transaction.libelle },
        { content: transaction.action},
        { content: transaction.amount, halign: 'right'},
        { content: transaction.patientAccountBalance, halign: 'right' },
      ]
     body.push(quotationItems);
    });
    var doc = new jsPDF('p', 'mm', 'a4');
    doc = this.sharedDocPdfService.docHeader('RELEVÉ DE COMPTE', 70)
   
    doc.setFontSize(11);
    doc.setFont("arial", "normal");
    doc.text(`${this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')}`,  160,50);

    doc.setFontSize(11);
    doc.setFont("arial", "normal");
    doc.text(`Patient: ${patient.firstName} ${patient.lastName}`,  20,60);

    autoTable(doc, {
            
        headStyles: { fillColor: '#16a2b8' },
        head: [['Op.Date','Libelle', 'Action', 'Montant', 'Solde Patient']],
        body:body,
         startY: 70,
     });

         
    doc.setFontSize(11);
    doc.setFont("arial", "normal");
    doc.text(`LA FACTURATION `,  160,270);


        return doc;
    }
}