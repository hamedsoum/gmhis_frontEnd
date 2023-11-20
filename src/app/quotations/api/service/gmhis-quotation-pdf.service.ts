import { DatePipe } from "@angular/common";
import { Injectable, OnInit } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISQuotationPartial } from "../domain/gmhis.quotation";
import autoTable from 'jspdf-autotable';
import { Subscription } from "rxjs";
import { GMHISQuotationItemPartial } from "../domain/gmhis.quotation.item";
import { GMHISQuotationFeatureService } from "./gmhis.quotation.feature.service";

@Injectable()
export class GMHISQuotationPdfService  {

    subscription: Subscription = new Subscription();

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe, private quotationFeatureService: GMHISQuotationFeatureService){}


    buildPdf(quotation: GMHISQuotationPartial, quotationItems: GMHISQuotationItemPartial[]): jsPDF {
        console.log(quotationItems);
        
        var body: any[] = [];

        var body: any[] = [];

        quotationItems.forEach((quotationItem: GMHISQuotationItemPartial) => {
      var date = this.datePipe.transform(quotationItem.dateOp, 'dd/MM/yyyy');
    let praticianName = quotationItem.praticianName ? `${quotationItem.praticianName.firstName} ${quotationItem.praticianName.lastName}` : '';
      let quotationItems = [
        {content :date },
        { content: quotationItem.actCode },
        { content: quotationItem.act.name},
        { content: quotationItem.actCoefficient},
        { content: quotationItem.unitPrice },
        { content: quotationItem.totalAmount, halign: 'right' },
        { content: praticianName, halign: 'right' },
      ]
     body.push(quotationItems);
    });

        const insuranceName =  quotation.insuranceName ? quotation.insuranceName : "CLIENT COMPTANT";
        const CMU = quotation.cmuPart > 0 ?  'CMU' : '';
        const affection = quotation.affection ? quotation.affection : "";
        const indication = quotation.indication ? quotation.indication : "";

        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.sharedDocPdfService.docHeader(`FACTURE PROFORMA N° ${quotation.quotationNumber}` , 24)
       
        let opDate = this.datePipe.transform(quotation.dateOp, 'dd/MM/yyyy');
        let opHour = this.datePipe.transform(quotation.dateOp, 'hh:mm:ss');

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`Date: ${opDate}`,  165,75);
        doc.text(`Heur: ${opHour}`,  165,80);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Etablissement Payeur : ',  20,80);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${CMU}  /  ${insuranceName}`.toUpperCase(),  58,80);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Nom Patient : ',  20,89);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${quotation.patientName.firstName} ${quotation.patientName.lastName}`.toUpperCase(),  58,89);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Code Patient : ',  20,98);
        doc.setFontSize(12);
        doc.text(`${quotation.code}`.toUpperCase(),  58,98);

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

          const cmuPart = quotation.cmuPart ? quotation.cmuPart : 0;
          doc.setFontSize(11);
          doc.setFont("arial", "normal");
          doc.text('Part CMU : ',  20,225);
          doc.setFontSize(13);
          doc.rect(65, 219, 30, 8)
          doc.setFont("arial", "normal");
          doc.text(`${cmuPart}`,  78,225);

          const insurancePart = quotation.insurancePart ? quotation.insurancePart : 0;
          doc.setFontSize(11);
          doc.setFont("arial", "normal");
          doc.text('Part Assurance : ',  20,235);
          doc.setFontSize(13);
          doc.rect(65, 229, 30, 8)
          doc.setFont("arial", "normal");
          doc.text(`${insurancePart}`,  78,235);

          const moderatorTicket = quotation.moderatorTicket ? quotation.moderatorTicket : 0;
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
        doc.text(`${quotation.totalAmount}`.toUpperCase(),  78,255);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Remise : ',  20,265);
        doc.rect(65, 259, 30, 8)
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${quotation.discount}`.toUpperCase(),  78,265);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Net à Payer : ',  20,275);
        doc.rect(65, 269, 30, 8)
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${quotation.netToPay}`.toUpperCase(),  78,275);


        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`LA FACTURATION `,  160,270);


        return doc;
    }
}