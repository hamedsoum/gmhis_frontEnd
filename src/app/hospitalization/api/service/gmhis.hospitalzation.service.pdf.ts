import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { GMHISSharedDocPdfService } from "src/app/shared/api/service/gmhis.shared.DocPdf.service";
import { GMHISHospitalizationPartial } from "../domain/gmhis-hospitalization";

@Injectable()
export class GMHISHospitalizationPdfService {

    constructor(private sharedDocPdfService: GMHISSharedDocPdfService, private datePipe: DatePipe){}

  
    public buildhospitalizationCrCertificatePdf(hospitalization: GMHISHospitalizationPartial): jsPDF {
        
        console.log(hospitalization);
        
        var doc = new jsPDF('p', 'mm', 'a4');
        doc = this.sharedDocPdfService.docHeader("COMPTE RENDU D'\HOSPITALISATION ", 35)


        let practician = `${hospitalization.practicianName.firstName} ${hospitalization.practicianName.lastName}`
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('MEDECIN: ',  20,75);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(practician.toUpperCase(),  41,75);


        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('SERVICE: ',  120,75);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('.............................................',  140,75);

        let patientName = `${hospitalization.patientName.firstName} ${hospitalization.patientName.lastName}`
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('NOM ET PRENOM(S) : ',  20,82);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(patientName.toUpperCase(),  62,82);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text("DATE D'ENTREE: ",  20,89);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(this.datePipe.transform(new Date(hospitalization.start), "short"),  54,89);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text("AGE: ",  120,89);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text('...............................................',  140,89);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize(`MOTIF D'HOSPITALISATION :  ${hospitalization.reason}`, 172), 20, 96, {lineHeightFactor: 2})

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize('ANTECEDENTS : .................................................................................................................................................................................................................................................................................................................................', 172), 20, 117, {lineHeightFactor: 2})

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize(`EXAMEN CLINIQUE : ............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................`, 172), 20, 133, {lineHeightFactor: 2})

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize(`BILAN PARACLINIQUE : ....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................`, 172), 20, 165, {lineHeightFactor: 2})
        
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text("TRAITMENT REÇU : ",  20,196);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize(`........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................`, 132), 60, 196, {lineHeightFactor: 2})
        

        let conclusion = hospitalization.conclusion? hospitalization.conclusion : '';
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(doc.splitTextToSize(`CONCLUSION : ${conclusion}`, 172), 20, 240, {lineHeightFactor: 2})
       
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text("DATE DE SORTIE: ",  20,260);
        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text(this.datePipe.transform(new Date(hospitalization.end), "short"),  54,260);

        doc.setFontSize(11);
        doc.setFont("arial", "bold");
        doc.text("SIGNATURE DU MEDECIN ",  140,270);
        return doc;
    }

}