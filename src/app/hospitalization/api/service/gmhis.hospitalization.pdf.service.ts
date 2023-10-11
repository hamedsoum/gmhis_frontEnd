import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISHospitalizationRequestPartial } from "../domain/request/gmhis-hospitalization-request";

@Injectable()
export class GMHISHospitalizationPdfService {

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}

  
    buildhospitalizationCertificatePdf(hospitalizationRequest: GMHISHospitalizationRequestPartial): jsPDF {
        
        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.buildCertificateTtitle("CERTIFICAT MEDICALE D'HOSPITALISATION", 22)
        let startDate = this.datePipe.transform(new Date(hospitalizationRequest.startDate), 'longDate');
        let currentDate = this.datePipe.transform(new Date(), 'longDate');

        doc.setFont("arial", "normal");
        doc.setFontSize(14);
         doc.text('À l\'attention du medecin conseil de ..................................................................................',  20,87);
       doc.text('Société ...............................................................................................................................',  20,96);
       doc.text('Assureur ............................................................................................................................',  20,105);
       doc.text('Matricule ...........................................................................................................................',  20,114);
       doc.text('Assuré(e) ...........................................................................................................................',  20,124);
       doc.text('Je sousigné Docteur ............................................................................................. certifie,',  20,133);
       doc.text('que le / la malade ..............................................................................................................',  20,141);
       doc.text('a été ',  20,150);
       doc.rect(30, 146, 10, 5, )
       doc.text('est ',  42,150);
       doc.rect(49, 146, 10, 5, )
       doc.text('sera ',  60,150);
       doc.rect(70, 146, 10, 5, )
       doc.text('hospitalisé (e) dans nos services ce jours pour :',  82,150);
       var splitTitle = doc.splitTextToSize(
        '.................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................' ,172);
       doc.text(splitTitle,  20,159, {lineHeightFactor: 2});
       doc.text(doc.splitTextToSize('La durée probable d\'hospitalisation est de .........  jour(s) à compter de ........................... ', 172), 20, 220, {lineHeightFactor: 2})

        doc.text(doc.splitTextToSize('En foi de quoi , le présent certificat est établi et délivré aux parents du défunt pour servir et valoir ce que de droit.', 150), 20, 229, {lineHeightFactor: 2})

        doc.text(`Abidjan,${currentDate} `,  120,255);

        doc.setFont("arial", "bold");
        doc.line(150, 222, 150,222);
        doc.text(`Signature et cachet du medecin `,  120,265);


        return doc;
    }

    buildInternalHospitalizationCertificatePDF(hospitalizationRequest: GMHISHospitalizationRequestPartial): jsPDF {
        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.buildCertificateTtitle("CERTIFICAT D'HOSPITALISATION", 44);

        doc.setFont("arial", "normal");
        doc.setFontSize(15);
        doc.text(doc.splitTextToSize('Nous soussignés POLYCLINIQUES SACREE COEUR certifions que Mr / Mme ................................................................................. est (a été) hospitalisé(é) dans nos services du .............................. au ............................... En foi de quoi ce présent certificat lui est délivré pour servir et valoir ce que de droit. ', 172), 20, 130, {lineHeightFactor: 3})
        doc.text(`Fait à Abidjan,le .............................20............... `,  90,255);

        return doc;
    }

    private buildCertificateTtitle(titleValue:string, titleX:number): jsPDF {
        var doc = new jsPDF();
        doc.setFillColor(230, 230, 230);
        doc.setFont("arial", "bold");
        doc.setFontSize(21);
        doc.rect(20, 60, 172, 15)
        doc.text(titleValue, titleX, 70);
        return doc;
    }

}