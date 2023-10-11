import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { InsurancePrintDataFormat } from "src/app/invoice/invoice";
import { User } from "src/app/_models";
import { UserService } from "..";
import autoTable from 'jspdf-autotable';

@Injectable({
    providedIn: 'root'
  })
  export class PrintInsuranceInvoiceService {
    constructor(private datePipe: DatePipe, private userService : UserService) { }
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
      doc.text('Sanlam Assurance', 70, 22);
  
      doc.text('Détails des factures',16, 35);
  
      doc.setFontSize(9);
      doc.text('Nom de Assurance',18, 45);
      doc.text(`${insuranceData.insuranceName} `,55, 45);
      doc.line(16, 47, 102, 47);
  
      doc.text('Date de Début',18, 53);
      let dateStart = insuranceData.dateStart != "##" ? insuranceData.dateStart : "##";
      doc.text(dateStart,55, 53);
      doc.line(16, 55, 102, 55);
  
      let dateEnd = insuranceData.dateEnd != "##" ? insuranceData.dateEnd : "##";
      doc.text('Date de Fin',18, 61);
      doc.text(dateEnd,55, 61);
      doc.line(16, 63, 102, 63);
  
  
      doc.setFontSize(9);
      doc.text('Solde Total',110, 45);
      doc.text(`${insuranceData.insuranceName == "##" ? 0  : insuranceData.totalBalance } XOF` ,170, 45);
      doc.line(110, 47, 195, 47);
  
      doc.text('Solde Assurance',110, 53);
      doc.text(`${insuranceData.InsuranceBalance} XOF`,170, 53);
      doc.line(110, 55, 195, 55);
  

  
  
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
        startY: 70,
      });
  
      return doc;
  
      }
  
  }