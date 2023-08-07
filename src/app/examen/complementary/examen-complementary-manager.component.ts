import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { ExaminationService } from "src/app/medical-folder/examination/services/examination.service";
import { labelValue } from "src/app/shared/domain";
import { NotificationService } from "src/app/_services";
import { NotificationType } from "src/app/_utilities/notification-type-enum";
import { ExamenCreateData } from "../models/exam-dto";
import { ExamService } from "../services/exam.service";
import { DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE, ExamenComplementary, EXAMEN_COMPLEMENTARY_TYPES } from "./api/domain/examenComplementary";
import { ExamenComplementaryService } from "./api/service/examen-complementary.service";

@Component({ selector: 'examen-complementary-manager', templateUrl: './examen-complementary-manager.component.html'})
export class examenComplementaryManagerComponent implements OnInit {

    @Input() admissionId: number;

    @Input() examenComplementaries: ExamenComplementary[];

    @Input() examenType: boolean;

    @Output() addExam = new EventEmitter();

    filteredExamenComplementaries?: ExamenComplementary[];

    examenComplementaryTypes = EXAMEN_COMPLEMENTARY_TYPES;
    filteredExamenComplementaryTypes?: labelValue[] = [];

    selectedExamens: ExamenComplementary[] = [];

    subscriptions: Subscription = new Subscription();

    examenComplementriesTypeLeftSection = [];

    examenCreateData: ExamenCreateData = {
        observation: null,
      };

    actsID: number [] = [];

    dayBetweenLastExaminationAndCurrentDate: number;

    constructor(
      private modalService: NgbModal,
      private examenService: ExamService, 
      private notificationService: NotificationService,
      private examinationService: ExaminationService,
      private examenComplementaryService: ExamenComplementaryService,
      ){}

    ngOnInit(): void {
      this.dayBetweenFirstExaminationAndCurrentDate();
        this.examenCreateData.admission = this.admissionId;
        this.findExamensComplementaries();
        this.filteredExamenComplementaryTypes = EXAMEN_COMPLEMENTARY_TYPES;        
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }  
    
    public create(): void {
        console.log(this.dayBetweenLastExaminationAndCurrentDate);
        
        if (this.dayBetweenLastExaminationAndCurrentDate > DAY_BETWEEN_LAST_EXAMINATION_AND_CURRENTDATE) {
          this.notificationService.notify( NotificationType.WARNING,`Vous ne pouvez pas effectuer de nouvelle consultation, car cette admission date de plus de ${this.dayBetweenLastExaminationAndCurrentDate}. Veuillez effectuer une autre admission pour ce patient`);
        }else{
          this.examenCreateData.examenTytpe = false;
          this.examenCreateData.acts = this.actsID;
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
          }else{
            this.notificationService.notify(
              NotificationType.ERROR,
              "Veuillez selectionner au moins une analyse médicale"
            );
          }
        }
      
    }

public onSelectedExamenComplementary(examen: ExamenComplementary){
    this.examenCreateData.acts = [];
    if (this.selectedExamens.includes(examen)) {
        let index = this.selectedExamens.indexOf(examen);
        this.selectedExamens.splice(index, 1);
        this.actsID.splice(index, 1)
      } else {
        this.selectedExamens.push(examen);
        this.actsID.push(examen.actID)
      }     
      console.log(this.selectedExamens);
      console.log(this.actsID);
    
      this.removeDuplicates(this.examenComplementriesTypeLeftSection,examen.examenComplementaryType )
}

    findExamensComplementaries(){
        this.subscriptions.add(
            this.examenComplementaryService.findExamenComplementaries().subscribe(
                (response: ExamenComplementary[]) => {
                    this.examenComplementaries = response;     
                    this.filteredExamenComplementaries = this.examenComplementaries;           
                },
                (errorResponse : HttpErrorResponse) => {
                    throw new Error(errorResponse.message);
                }
            )
        )
       
    }
    
    public onSearchExamen(examenSearch: string): void {
        this.searchActs(examenSearch);
      }

    private searchActs(examenSearch: string): void {

        if (examenSearch == '') {            
            this.filteredExamenComplementaryTypes = this.examenComplementaryTypes;

            this.filteredExamenComplementaries = this.examenComplementaries;
        }else{
            this.filteredExamenComplementaries = this.examenComplementaries.filter((examen) => examen.act.name.toLowerCase().includes(examenSearch.toLowerCase()));
           
            let partial = [];
            this.filteredExamenComplementaries.forEach((el: ExamenComplementary) => {
                let examComplementaryRetrieve = EXAMEN_COMPLEMENTARY_TYPES.find((exam: labelValue) => exam.value == el.examenComplementaryType.toLowerCase());
                                
                if(!partial.includes(examComplementaryRetrieve)) partial.push(examComplementaryRetrieve);

                this.filteredExamenComplementaryTypes = partial;
            }) 
        }
            console.log(this.filteredExamenComplementaries);
             
      }

      private removeDuplicates(arr, item) {
          console.log(this.examenComplementriesTypeLeftSection);
          
        console.log(item);
        if (!arr.includes(item)) arr.push(item);
      }

      public analysisSelect(examenID: any){
        console.log(examenID);
      }

      private dayBetweenFirstExaminationAndCurrentDate() {
        this.examinationService.dayBetweenFirstExaminationAndCurrentDate(this.admissionId).subscribe(
          (response: number) => {
            this.dayBetweenLastExaminationAndCurrentDate = response;
          }
        )
      }
}