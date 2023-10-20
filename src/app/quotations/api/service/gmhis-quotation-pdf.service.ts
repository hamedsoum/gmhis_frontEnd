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
        console.log(quotation);
        
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
        const affection = quotation.affection ? quotation.affection : "";
        const indication = quotation.indication ? quotation.indication : "";

        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.sharedDocPdfService.docHeader('FACTURE PROFORMA N° ' + quotation.quotationNumber.toUpperCase(), 24)
       
        let opDate = this.datePipe.transform(quotation.dateOp, 'dd/MM/yyyy');
        let opHour = this.datePipe.transform(quotation.dateOp, 'hh:mm:ss');

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`Date: ${opDate}`,  165,75);
        doc.text(`Heur: ${opHour}`,  165,80);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Etablissement Payeur : ',  20,95);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${insuranceName}`.toUpperCase(),  58,95);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Nom Patient : ',  20,104);
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${quotation.patientName.firstName} ${quotation.patientName.lastName}`.toUpperCase(),  58,104);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Code Patient : ',  20,113);
        doc.setFontSize(12);
        doc.text(`${quotation.code}`.toUpperCase(),  58,113);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Affection : ',  20,122);
        doc.setFontSize(12);
        doc.text(`${affection}`,  58,122);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text('Indication : ',  20,131);
        doc.setFontSize(12);
        doc.text(`${indication}`,  58,131);

        doc.setFontSize(10);

        autoTable(doc, {
            
            headStyles: { fillColor: '#16a2b8' },
            head: [['Date','Acte', 'Libelle de l\'acte', 'NB/Co', 'PU', 'Montant', 'Practicien']],
            body:body,
            // foot: [
            //   ['Total Part Mutuelle', '', '', '', '', ` FCFA`],
            // ],
            startY: 140,
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
        doc.text('Net à Payer : ',  20,255);
        doc.rect(65, 249, 30, 8)
        doc.setFontSize(13);
        doc.setFont("arial", "bold");
        doc.text(`${quotation.totalAmount}`.toUpperCase(),  78,255);

        doc.setFontSize(11);
        doc.setFont("arial", "normal");
        doc.text(`LA FACTURATION `,  160,270);


        return doc;
    }
}