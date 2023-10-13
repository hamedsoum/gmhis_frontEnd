import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISDeathPartial } from "../domain/gmhis.death.domain";

@Injectable()
export class GMHISDeathPdfService {

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}

    buildPdf(death: GMHISDeathPartial): jsPDF {
        
        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.sharedDocPdfService.docHeader('CERTIFICAT DE DÉCÈS', 65)
        let deathDate = this.datePipe.transform(new Date(death.deathDate), 'longDate');
        let currentDate = this.datePipe.transform(new Date(), 'longDate');

       doc.setFontSize(14);
       doc.setFont("arial", "normal");
       var splitTitle = doc.splitTextToSize(`Je sousigné Docteur ${death.deathDeclaratedByName.toUpperCase()} certifie avoir constaté le décès de Mr/Mme ${death.patientFirstName.toUpperCase()} ${death.patientLastName.toUpperCase()} ;  décès survenu le ${deathDate} à son domicile.`  ,178);
      let pre =  doc.text(splitTitle,  20,90, {lineHeightFactor: 2});

       doc.text(doc.splitTextToSize('En foi de quoi , le présent certificat est établi et délivré aux parents du défunt pour servir et valoir ce que de droit.', 172), 20, 120, {lineHeightFactor: 2})

       doc.text(`Abidjan,${currentDate} `,  120,210);

       doc.setFont("arial", "bold");
       doc.line(150, 222, 150,222);
       doc.text(`Signature et cachet du medecin `,  120,220);


        return doc;
    }

   

}