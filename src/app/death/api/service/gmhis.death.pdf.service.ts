import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISDeathPartial } from "../domain/gmhis.death.domain";

@Injectable()
export class GMHISDeathPdfService {

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}

    buildPdf(death: GMHISDeathPartial): jsPDF {
        console.log(death);
        
        var doc = new jsPDF('p', 'mm', 'a4');
        
       let docs = doc.text("CERTIFICAT DE DÉCÈS", 70, 70);
        let deathDate = this.datePipe.transform(new Date(death.deathDate), 'longDate');
        let currentDate = this.datePipe.transform(new Date(), 'longDate');

       doc.setFontSize(10);
       var splitTitle = doc.splitTextToSize(`Je sousigné Docteur ${death.deathDeclaratedByName.toUpperCase()} certifie avoir constaté le décès de Mr/Mme ${death.patientFirstName.toUpperCase()} ${death.patientLastName.toUpperCase()} ;  décès survenu le ${deathDate} à son domicile.`  ,150);
      let pre =  doc.text(splitTitle,  30,90, {lineHeightFactor: 2});

       doc.text(doc.splitTextToSize('En foi de quoi , le présent certificat est établi et délivré aux parents du défunt pour servir et valoir ce que de droit.', 150), 30, 110, {lineHeightFactor: 2})

       doc.text(`Abidjan,${currentDate} `,  150,210);

       
       doc.text(`Le Medecin `,  150,220);


        return doc;
    }

   

}