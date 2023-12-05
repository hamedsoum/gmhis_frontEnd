import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { InsurancePrintDataFormat } from "src/app/invoice/invoice";
import { User } from "src/app/_models";
import { UserService } from "..";
import autoTable from 'jspdf-autotable';
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";

@Injectable({
    providedIn: 'root'
  })
  export class PrintInsuranceInvoiceService {
    constructor(private datePipe: DatePipe, private userService : UserService, private sharedDocPdfService: GMHISSharedDocPdfService) { }
    private getUser(): User {    
      return this.userService.getUserFromLocalCache();
    }
     user = this.getUser();
    buildPrintList(insuranceData: InsurancePrintDataFormat, practicianBill? : boolean) {
      let practicianBillHeader = ['Date op.', 'N° Facture','N° Patient','Assurance','Solde Total.','Solde Insurance.'];
      
      var doc = new jsPDF('p', 'mm', 'a4');
  
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      
      //TODO
      doc = this.sharedDocPdfService.docHeader("Facture Assurance", 80)  
      doc.setFontSize(9);
      doc.text('Nom de Assurance',18, 55);
      doc.text(`${insuranceData.insuranceName} `,55, 55);
      doc.line(16, 57, 102, 57);
  
      doc.text('Date de Début',18, 63);
      let dateStart = insuranceData.dateStart != "##" ? insuranceData.dateStart : "##";
      doc.text(dateStart,55, 63);
      doc.line(16, 65, 102, 65);
  
      let dateEnd = insuranceData.dateEnd != "##" ? insuranceData.dateEnd : "##";
      doc.text('Date de Fin',18, 71);
      doc.text(dateEnd,55, 71);
      doc.line(16, 73, 102, 73);
  
  
      doc.setFontSize(9);
      doc.text('Solde Total',110, 55);
      doc.text(`${insuranceData.insuranceName == "##" ? 0  : insuranceData.totalBalance } XOF` ,170, 55);
      doc.line(110, 57, 195, 57);
  
      doc.text('Solde Assurance',110, 63);
      doc.text(`${insuranceData.InsuranceBalance} XOF`,170, 63);
      doc.line(110, 65, 195, 65);
  

  
  
      var body: any[] = [];
  
      insuranceData.data.forEach((insuranceContent: any) => {
        var date = this.datePipe.transform(insuranceContent['billDate'], 'dd/MM/yyyy');
        let insuranceContents = [
          {content :date },
          { content: insuranceContent['billNumber'] },
          { content: insuranceContent['patientNumber'] },
          { content: insuranceContent['insurance'] },
          { content: insuranceContent['billTotalAmount'] },
          { content: insuranceContent['insurancePart'] }
        ];
       
       body.push(insuranceContents);
      });
      autoTable(doc, {
        headStyles: { fillColor: null, textColor : '#000', fontSize: 8 },
        footStyles: { fillColor: '#16a2b8' },
        bodyStyles:{fontSize: 8},
        head: [practicianBill? practicianBillHeader : ['Date op.', 'N° Facture', 'N° Admission', 'Assurance', 'Total Facture', 'Part prise en charge']],
        body: body,
        startY: 80,
      });
  
      return doc;
  
      }
  
  }