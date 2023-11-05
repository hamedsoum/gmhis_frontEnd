import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import autoTable from 'jspdf-autotable';
import { Subscription } from "rxjs";
import { GMHISInvoiceHPartial } from "../domain/gmhis.quotation";
import { GMHISInvoiceHItemPartial } from "../domain/gmhis.quotation.item";

@Injectable()
export class GMHISInvoiceHPdfService  {

    subscription: Subscription = new Subscription();

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}


    buildPdf(invoice: GMHISInvoiceHPartial, invoiceItems: GMHISInvoiceHItemPartial[]): jsPDF {
              
        var body: any[] = [];

        var body: any[] = [];

        invoiceItems.forEach((invoiceItem: GMHISInvoiceHItemPartial) => {
      var date = this.datePipe.transform(invoiceItem.dateOp, 'dd/MM/yyyy');
    let praticianName = invoiceItem.praticianName ? `${invoiceItem.praticianName.firstName} ${invoiceItem.praticianName.lastName}` : '';
      let quotationItems = [
        {content :date },
        { content: invoiceItem.actCode },
        { content: invoiceItem.act.name},
        { content: invoiceItem.actCoefficient},
        { content: invoiceItem.unitPrice },
        { content: invoiceItem.totalAmount, halign: 'right' },
        { content: praticianName, halign: 'right' },
      ]
     body.push(quotationItems);
    });

        const insuranceName =  invoice.insuranceName ? invoice.insuranceName : "CLIENT COMPTANT";
        const affection = invoice.affection ? invoice.affection : "";
        const indication = invoice.indication ? invoice.indication : "";

        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.sharedDocPdfService.docHeader('FACTURE N° ' + invoice.invoiceNumber.toUpperCase(), 50)
       
        let opDate = this.datePipe.transform(invoice.dateOp, 'dd/MM/yyyy');
        let opHour = this.datePipe.transform(invoice.dateOp, 'hh:mm:ss');

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`Date: ${opDate}`,  165,75);
        doc.text(`Heur: ${opHour}`,  165,80);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Etablissement Payeur : ',  20,80);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${insuranceName}`.toUpperCase(),  58,80);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Nom Patient : ',  20,89);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${invoice.patientName.firstName} ${invoice.patientName.lastName}`.toUpperCase(),  58,89);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Code Patient : ',  20,98);
        doc.setFontSize(12);
        doc.text(`${invoice.code}`.toUpperCase(),  58,98);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Affection : ',  20,107);
        doc.setFontSize(12);
        doc.text(`${affection}`,  58,107);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Indication : ',  20,116);
        doc.setFontSize(12);
        doc.text(`${indication}`,  58,116);

        doc.setFontSize(10);

        autoTable(doc, {
            
            headStyles: { fillColor: '#16a2b8' },
            head: [['Date','Acte', 'Libelle de l\'acte', 'NB/Co', 'PU', 'Montant', 'Practicien']],
            body:body,
            // foot: [
            //   ['Total Part Mutuelle', '', '', '', '', ` FCFA`],
            // ],
            startY: 125,
          });

          const cmuPart = invoice.cmuPart ? invoice.cmuPart : 0;
          doc.setFontSize(11);
          doc.setFont("arial", "normal");
          doc.text('Part CMU : ',  20,225);
          doc.setFontSize(13);
          doc.rect(65, 219, 30, 8)
          doc.setFont("arial", "normal");
          doc.text(`${cmuPart}`,  78,225);

          const insurancePart = invoice.insurancePart ? invoice.insurancePart : 0;
          doc.setFontSize(11);
          doc.setFont("arial", "normal");
          doc.text('Part Assurance : ',  20,235);
          doc.setFontSize(13);
          doc.rect(65, 229, 30, 8)
          doc.setFont("arial", "normal");
          doc.text(`${insurancePart}`,  78,235);

          const moderatorTicket = invoice.moderatorTicket ? invoice.moderatorTicket : 0;
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('Ticket Modérateur : ',  20,245);
        doc.setFontSize(13);
        doc.rect(65, 239, 30, 8)
        doc.setFont("arial", "bold");
        doc.text(`${moderatorTicket}`,  78,245);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Total Amount : ',  20,255);
        doc.rect(65, 249, 30, 8)
        doc.setFontSize(13);
        doc.setFont("arial", "normal");
        doc.text(`${invoice.totalAmount}`.toUpperCase(),  78,255);

        const netToPay = invoice.moderatorTicket ? invoice.moderatorTicket : invoice.totalAmount;
        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Net à Payer : ',  20,265);
        doc.rect(65, 259, 30, 8)
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${netToPay}`.toUpperCase(),  78,265);


        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`LA FACTURATION `,  160,270);


        return doc;
    }
}