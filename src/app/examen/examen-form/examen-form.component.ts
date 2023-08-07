import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActService } from 'src/app/act/act/service/act.service';
import { MedicalAnalysisSpecialityService as analysisSpecialityService } from 'src/app/medical-analysis-speciality/service/medical-analysis-speciality.service';
import { ExaminationService } from 'src/app/medical-folder/examination/services/examination.service';
import { INameAndId as NameAndId } from 'src/app/shared/models/name-and-id';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { ExamenCreateData } from '../models/exam-dto';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examen-form',
  templateUrl: './examen-form.component.html',
  styleUrls: ['./examen-form.component.scss']
})
export class ExamenFormComponent implements OnInit {
  public readonly DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE = 7;

  @Input() admissionId: number;

  @Input() examenType: boolean;

  @Output() addExam = new EventEmitter();

  acts: NameAndId[];
  searchResult: any[];

  examenCreateData: ExamenCreateData = {
    observation: null,
  };

  selectedItems = [];
  analysisSpeciality: any;
  analysisSpecialitySecondSection: any = [];

  formGroup: FormGroup;

  dayBetweenLastExaminationAndCurrentDate: number;

  specialitiesName: string[] = [];
  specialitiesNameFilter: string[] = [];



  constructor(private actService: ActService, private examenService: ExamService,private modalService: NgbModal, private examinationService: ExaminationService,
              private analysisSpecialityService: analysisSpecialityService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.dayBetweenFirstExaminationAndCurrentDate();
    this.retrieveActs();
    this.buildDefault();
    this.getAllMedicalAnalysisSpeciality();
    this.buildFields();
  }

  public onSearchActs(search: string): void {
    this.searchActs(search);
  }

  public getPrescriptionItemsIdToCollected(item) {
    this.examenCreateData.acts = [];
    if (this.selectedItems.includes(item)) {
      let index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
    this.removeDuplicates(this.analysisSpecialitySecondSection, item["medicalAnalysisName"]);
  }

  public saveExamanRequest() {
    if (this.dayBetweenLastExaminationAndCurrentDate > this.DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE) {
      this.notificationService.notify( NotificationType.WARNING,`Vous ne pouvez pas effectuer de nouvelle consultation, car cette admission date de plus de ${this.dayBetweenLastExaminationAndCurrentDate}. Veuillez effectuer une autre admission pour ce patient`);
    } else {
      this.examenCreateData.examenTytpe = this.examenType;
      this.selectedItems.forEach((el) => { this.examenCreateData.acts.push(el["id"]) })
      console.log(this.selectedItems);
      
      if (this.examenCreateData.acts.length != 0) {
        this.examenService.createExam(this.examenCreateData).subscribe(
          (response: any) => {
            this.modalService.dismissAll();
            this.addExam.emit();
          },
          (errorResponse: HttpErrorResponse) => {
            this.notificationService.notify(
              NotificationType.ERROR,
              errorResponse.error.message
            );
          }
        )
      } else {
        this.notificationService.notify(
          NotificationType.ERROR,
          "Veuillez selectionner au moins une analyse médicale"
        );
      }
    }

  }

  private getAllMedicalAnalysisSpeciality() {
    this.analysisSpecialityService.getListOfActiveMedicaleAnalysis().subscribe(
      (response: any) => {
        this.analysisSpeciality = response;
        this.analysisSpeciality.forEach(el => { this.specialitiesName.push(el.name) })
      }
    )
  }

  private buildDefault() {
    this.searchResult = this.acts;
    this.specialitiesNameFilter = this.specialitiesName;
    this.examenCreateData.admission = this.admissionId;
  }

  private dayBetweenFirstExaminationAndCurrentDate() {
    this.examinationService.dayBetweenFirstExaminationAndCurrentDate(this.admissionId).subscribe(
      (response: number) => {
        this.dayBetweenLastExaminationAndCurrentDate = response;
      }
    )
  }

  private buildFields(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      insurrance: new FormControl(null),
      patientType: new FormControl(null),
      laboratoryType: new FormControl(null),
    })
  }

  private retrieveActs() {
    this.actService.getListOfAllMedicalAnalysis().subscribe(
      (response: any) => {
        this.acts = response;        
        this.buildDefault();
      }
    )
  }

  private searchActs(actSearch: string): void {
    
    if (actSearch == '') {
      this.specialitiesNameFilter = this.specialitiesName;
    } else {
      this.searchResult = this.acts.filter((act) => act.name.toLowerCase().includes(actSearch.toLocaleLowerCase()));
      let specialitiesNameFilterPartial = [];
      this.searchResult.forEach(el => {
        if (!specialitiesNameFilterPartial.includes(el.medicalAnalysisName)) specialitiesNameFilterPartial.push(el.medicalAnalysisName);
      })
      this.specialitiesNameFilter = specialitiesNameFilterPartial;
    }
  }

  private removeDuplicates(arr, item) {
    console.log(item);
    if (!arr.includes(item)) arr.push(item);
  }

}
