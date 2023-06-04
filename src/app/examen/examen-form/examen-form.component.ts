import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActService } from 'src/app/act/act/service/act.service';
import { InsuranceService } from 'src/app/insurance/insurance.service';
import { MedicalAnalysisSpecialityService } from 'src/app/medical-analysis-speciality/service/medical-analysis-speciality.service';
import { ExaminationService } from 'src/app/medical-folder/examination/services/examination.service';
import { INameAndId } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { IExamDto } from '../models/exam-dto';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.scss']
})
export class ExamenFormComponent implements OnInit {
  acts: INameAndId;

  @Output() addExam: EventEmitter<any> = new EventEmitter();
  
  @Input() admissionId : number;

  @Input() examenType : boolean;

  examDto : IExamDto = {
    acts: [],
    admission: 0,
    diagnostic: 'ok ok ',
    id: 0,
    observation: null,
    examenTytpe: false
  };
  selectectedItems = [];
  medicalAnalysisSpeciality: any;
  medicalAnalysisSpecialitySecondSection: any = [];
  observation : string = ' l';
  examenForm : FormGroup;
  laboratories = [
    {
      name : 'Interne',
      value : 'I'
    },
    {
      name : 'Externe',
      value : 'E'
    }
  ];

  patientTypes = [
    {
      name : 'Comptant',
      value : 'C'
    },
    {
      name : 'Assuré',
      value : 'A'
    }
  ];

  InsurrancesList : INameAndId;

  dayBetweenLastExaminationAndCurrentDate: number;


  constructor(
    private actService : ActService,
    private examenService : ExamService,
    private modalService: NgbModal,
    private notificationService: NotificationService,
    private medicalAnalysisSpecialityService : MedicalAnalysisSpecialityService,
    private insuranceService : InsuranceService,
    private examinationService : ExaminationService
    ) { }

  ngOnInit(): void {
    console.log(this.examenType);
    
    this.retrieveDayNumberBetweenAdmissionFirstExaminationAndCurrentDate();

    this.getAllAct();
    this.examDto.admission = this.admissionId;
    this.getAllMedicalAnalysisSpeciality();
    this.initForm();
    this.getAllInsuranceActive();
  }

  retrieveDayNumberBetweenAdmissionFirstExaminationAndCurrentDate(){
    this.examinationService.retrieveDayNumberBetweenAdmissionFirstExaminationAndCurrentDate(this.admissionId).subscribe(
      (response : number) => {
        this.dayBetweenLastExaminationAndCurrentDate = response;
        console.log(this.dayBetweenLastExaminationAndCurrentDate);
        
      },
      (errorResponse : HttpErrorResponse) => {
        console.log(errorResponse);
      }
    )
  }

  onOpenChooseLaboratoryTypeModal( chooseLaboratoryContent) {
    this.modalService.open(chooseLaboratoryContent, {size : 'md', centered : true})
  }

  ChooseLaboratoryType(laboratoryType : number){
    console.log(laboratoryType);
    if (laboratoryType == 1) this.saveExamanRequest();
  }



  initForm():void {
    this.examenForm = new FormGroup({
        id : new FormControl(null),
        laboratoryType : new FormControl(null),
        patientType : new FormControl(null),
        insurrance : new FormControl(null),
    })
  }

  getAllAct(){
    this.actService.getListOfAllMedicalAnalysis().subscribe(
      (response : any) => {
        this.acts = response;
        
      }
    )
  }

  getPrescriptionItemsIdToCollected(item) {  
    this.examDto.acts = [];
    if (this.selectectedItems.includes(item)) {
      let index = this.selectectedItems.indexOf(item);
      this.selectectedItems.splice(index, 1);

    } else {
      this.selectectedItems.push(item);
    }
    this.removeDuplicates(this.medicalAnalysisSpecialitySecondSection,item["medicalAnalysisName"]);   
     
  }

   removeDuplicates(arr,item) {
    if (!arr.includes(item)) {
      arr.push(item);
    }
}

  saveExamanRequest(){

    if (this.dayBetweenLastExaminationAndCurrentDate > 7) {
      this.notificationService.notify(
        NotificationType.ERROR,
        `Vous ne pouvez pas effectuer de nouvelle consultation, car cette admission date de plus de ${this.dayBetweenLastExaminationAndCurrentDate}.
         Veuillez effectuer une autre admission pour ce patient`
      );
    }else{
      this.examDto.examenTytpe = this.examenType;
      this.selectectedItems.forEach((el) => {
        this.examDto.acts.push(el["id"])
      })
      if (this.examDto.acts.length != 0) {
        this.examenService.createExam(this.examDto).subscribe(
          (response : any) => {
            this.modalService.dismissAll();
            this.addExam.emit()
          },
          (errorResponse : HttpErrorResponse) => {
            this.notificationService.notify(
              NotificationType.ERROR,
              errorResponse.error.message
            );
          }
        )
      }else{
        this.notificationService.notify(
          NotificationType.ERROR,
          "Veuillez selectionner au moins une analyse médicale"
        );
      }
    }
   
  }

  getAllMedicalAnalysisSpeciality(){
    this.medicalAnalysisSpecialityService.getListOfActiveMedicaleAnalysis().subscribe(
      (response : any) => {
        this.medicalAnalysisSpeciality = response;        
      }
    )
  }

  getAllInsuranceActive(){
    this.insuranceService.getAllInsuranceActive().subscribe(
      (response : INameAndId) => {
        this.InsurrancesList = response;
      }
    )
  }
}
