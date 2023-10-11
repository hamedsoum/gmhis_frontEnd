import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import { IExamination } from '../models/examination';
import { Patient } from 'src/app/patient/patient';



@Injectable({providedIn: 'root'})
export class ExaminationPrintDocumentService {

  constructor(private datePipe : DatePipe) { }

examinationRecordPDF(examination: IExamination, patient: Patient): jsPDF{
  
var doc = new jsPDF('p', 'mm', 'a4');
  
doc.setFontSize(15)
doc.text("consultation médicale".toUpperCase(), 65, 15);

doc.rect(20, 25, 170, 30)
doc.setFontSize(10)
doc.text("Nom: ", 23, 31);
doc.setFontSize(11)
doc.text(`${patient.lastName}`, 35, 31);

doc.setFontSize(10)
doc.text("Prénom (s): ", 23, 37);
doc.setFontSize(11)
doc.text(`${patient.firstName}`, 45,37 );

doc.setFontSize(10)
doc.text("Téléphone: ", 23, 43);
doc.setFontSize(11)
doc.text(`${patient.cellPhone1}`, 45,43 );

doc.setFontSize(10)
doc.text("E-mail: ", 23, 49);
doc.setFontSize(11)
doc.text(`${patient.email}`, 38,49 );

doc.setFontSize(10);
doc.text("Centre de santé: ", 92, 31);
doc.setFontSize(11)
doc.text(`${examination.facility}`.toLowerCase(), 120,31 );

doc.setFontSize(10);
doc.text("Service: ", 92, 37);
doc.setFontSize(11)
doc.text('---', 120,37 );

doc.setFontSize(10);
doc.text("Practiticien: ", 92, 43);
doc.setFontSize(11)
doc.text(`${examination['practicianLastName']} ${examination['practicianFirstName']}`, 120,43 );

doc.setFontSize(10);
doc.text("Diagnostic: ", 92, 49);
doc.setFontSize(11)
if(examination.conclusion) doc.text(`${examination.conclusion}`.toUpperCase(), 120,49 );


doc.html('<div> Integration de html </div>', {x: 20, y: 70,  width: 170, windowWidth: 650 })

doc.setFontSize(12)
doc.text("Motif de Consultation", 20, 75);
doc.setFontSize(10)
doc.text(`${examination.examinationReasons}`, 20, 80);

doc.setFontSize(12)
doc.text("Anamnese Actuelle", 20, 90);
doc.setFontSize(10)
doc.text(`${examination.history}`, 20, 95);

doc.setFontSize(12)
doc.text("Anamnese Socio-professionnelle", 20, 140);
doc.setFontSize(10)
doc.text(`${examination.anamnesisSocioProfessional}`, 20, 145);

doc.setFontSize(12)
doc.text("Antecedents personnels", 20, 160);
doc.setFontSize(10)
doc.text(`${examination.oldTreatment}`, 20, 165);

doc.setFontSize(12)
doc.text("Antecedents Familiaux", 20, 180);
doc.setFontSize(10)
doc.text(`${examination.antecedentsFamily}`, 20, 185);

doc.setFontSize(12)
doc.text("Habitudes", 20, 200);
doc.setFontSize(10)
doc.text(`${examination.habits}`, 20, 205);

doc.setFontSize(12)
doc.text("Examen Clinique", 20, 220);
doc.setFontSize(10)
doc.text(`${examination.clinicalExamination}`, 20, 225);

doc.setFontSize(12)
doc.text("Diagnostic de presemption", 20, 280);
doc.setFontSize(10)
doc.text(`${examination.diagnosisPresumptive}`, 20, 285);
  return doc;

}

}
