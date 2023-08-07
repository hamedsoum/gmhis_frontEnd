import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { MedicalAnalysisSpecialityService } from "src/app/medical-analysis-speciality/service/medical-analysis-speciality.service";
import { ExamenComplementary, ExamenComplementaryPartial, ExamenComplementaryType } from "../api/domain/examenComplementary";
import { ExamenComplementaryService } from "../api/service/examen-complementary.service";

@Component({selector: 'analysis-biological', templateUrl: 'biological-analysis.component.html'})
export class BiologicalAnalysisComponent implements OnInit, OnDestroy {

    @Input() analysisSerach : string;

    @Input() showCheckBox : boolean;

    @Input() examenComplementary: ExamenComplementaryPartial;

    @Output() analysisSelectEvent: EventEmitter<ExamenComplementary> = new EventEmitter();

    subscriptions: Subscription = new Subscription();

    biologicalAnalysis: ExamenComplementary[];

    bASpecialitiesName: any[] = []; 
    bASpecialitiesFilter: string[] = [];
    biologicalAnalysisFind: ExamenComplementary[];

    ngOnInit(): void {
        this.findBiologicalAnalysis();
        this.getAllMAnalysisSpeciality();
        this.buildDefault();
    }

    ngOnDestroy(): void {this.subscriptions.unsubscribe()}

    constructor(private examenComplementaryService: ExamenComplementaryService, private analysisSpecialityService: MedicalAnalysisSpecialityService){}

    findBiologicalAnalysis(): void{
        this.subscriptions.add(
            this.examenComplementaryService.findExamenComplementaries()
            .subscribe(
                (response: ExamenComplementary[]) => {
                    this.biologicalAnalysis = response.filter(examen => examen.examenComplementaryType == ExamenComplementaryType.BIOLOGICAL_ANALYSIS.toUpperCase());
                    this.buildDefault();
                },
                (errorResponse : HttpErrorResponse) => {
                    throw new Error(errorResponse.message);
                }
            )
        )
    }

    public onSearchExamens(search: string): void {
        this.searchActs(search);
      }

      private searchActs(analysisSerach: string): void {
            console.log(analysisSerach);
            if (analysisSerach == '') {                
                this.bASpecialitiesFilter = this.bASpecialitiesName;
            }else{
                console.log(this.biologicalAnalysisFind)
                this.biologicalAnalysisFind = this.biologicalAnalysis.filter((analysis) => analysis.actName.toLowerCase().includes(analysisSerach.toLowerCase()));
                let specialitiesNameFilterPartial = [];
                console.log(this.biologicalAnalysisFind);
                
                this.biologicalAnalysisFind.forEach(el => {
                  if (!specialitiesNameFilterPartial.includes(el.medicalAnalysisName)) specialitiesNameFilterPartial.push(el.medicalAnalysisName);
                })
                this.bASpecialitiesFilter = specialitiesNameFilterPartial; 
            }
            
      }

      private getAllMAnalysisSpeciality() {
        this.analysisSpecialityService.getListOfActiveMedicaleAnalysis().subscribe(
          (response: any) => {
            response.forEach(el => { this.bASpecialitiesName.push(el.name) });
          }
        )
      }

      private buildDefault() {
        this.biologicalAnalysisFind = this.biologicalAnalysis;
        this.bASpecialitiesFilter = this.bASpecialitiesName;
      }

      private removeDuplicates(arr, item) {
        console.log(item);
        if (!arr.includes(item)) arr.push(item);
      }

      public examenSelected(examen : ExamenComplementary): void {  
          console.log(examen);
                  
          this.analysisSelectEvent.emit(examen);
      }
    
}
