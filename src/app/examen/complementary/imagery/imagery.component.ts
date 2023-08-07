import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { ExamenComplementary, ExamenComplementaryType } from "../api/domain/examenComplementary";
import { ExamenComplementaryService } from "../api/service/examen-complementary.service";

@Component({selector: 'imagery', templateUrl: 'imagery.component.html'})
export class ImageryComponent implements OnInit{

    @Output() analysisSelectEvent: EventEmitter<ExamenComplementary> = new EventEmitter();

    private subscriptions: Subscription = new Subscription();

    imageries: ExamenComplementary[];
    imageriesFind: ExamenComplementary[];

    ngOnInit(): void {
        this.findBiologicalAnalysis();
    }

    constructor(private examenComplementaryService: ExamenComplementaryService){}

    private findBiologicalAnalysis():void{
        this.subscriptions.add(
            this.examenComplementaryService.findExamenComplementaries()
            .subscribe(
                (response: ExamenComplementary[]) => {
                    this.imageries = response.filter(examen => examen.examenComplementaryType == ExamenComplementaryType.IMAGERY.toUpperCase());
                    this.imageriesFind = this.imageries;
                    
                },
                (errorResponse : HttpErrorResponse) => {
                    throw new Error(errorResponse.message);
                }
            )
        )
    }

    public examenSelected(examen : ExamenComplementary): void {  
        console.log(examen);        
        this.analysisSelectEvent.emit(examen);
    }

    public onSearchImageries(imagerySerach: string): void {
        this.searchImageries(imagerySerach);
      }

      private searchImageries(imagerySerach: string): void {
        if(imagerySerach != '') this.imageriesFind = this.imageries.filter((imagery) => imagery.actName.toLowerCase().includes(imagerySerach.toLowerCase()));
        else this.imageriesFind = this.imageries;
      }
}