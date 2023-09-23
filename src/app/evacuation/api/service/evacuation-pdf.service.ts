import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import { GMHISEvacuationPartial } from '../domain/evacuation.domain';



@Injectable()
export class GMHISEvacuationPDFService {

  constructor(private datePipe : DatePipe) { }

evatuationRecordPDF(evacuation: any): jsPDF{
  
var doc = new jsPDF('p', 'mm', 'a4');
  
doc.addImage(evacuation.facilityLogo, "JPEG", 14, 1, 30, 30);

doc.setFontSize(15)
doc.text("fiche d'évacuation".toUpperCase(), 65, 35);

doc.setFontSize(13)
doc.text("Établissement evacuateur: ", 23, 51);
doc.setFontSize(11)
doc.text(`${evacuation.evacuationFacilityName}`, 95, 51);

doc.setFontSize(13)
doc.text("Date et Heure de Départ : ", 23, 62);
doc.setFontSize(11)
doc.text(`${evacuation.startDate}`, 95,62 );

doc.setFontSize(13)
doc.text("Service Evacuateur: ", 23, 78);
doc.setFontSize(11)
doc.text(`${evacuation.service}`, 95,78 );

doc.setFontSize(13)
doc.text("Médecin ayant décidé l'évacuation  ", 23, 94);
doc.setFontSize(11)
doc.text(`${evacuation.practicianName}`, 95,94 );

doc.setFontSize(13);
doc.text("Nom et Prénom(s) du malade: ", 23, 110);
doc.setFontSize(11)
doc.text(`${evacuation.patientName}`.toLowerCase(), 90,110 );

doc.setFontSize(13);
doc.text("Motif de l'évacuation: ", 23, 126);
doc.setFontSize(11)
doc.text(evacuation.evacuationReason, 78,126 );

doc.setFontSize(13);
doc.text("Renseignement Cliniques ", 23, 142);
doc.setFontSize(11)
doc.text(evacuation.clinicalInformation, 78,142 );

doc.setFontSize(13);
doc.text("Traitement réçu: ", 23, 170);
doc.setFontSize(11)
doc.setFontSize(11)
doc.text(evacuation.clinicalInformation, 78,170 );
doc.setFontSize(12)
doc.text("Etablissement d'accueil", 23, 190);
doc.setFontSize(13)
doc.text(`${evacuation.receptionFacilityName}`, 78, 190);
  return doc;

}

}
