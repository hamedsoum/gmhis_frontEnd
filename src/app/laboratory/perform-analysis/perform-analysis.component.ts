import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalysisRequestService } from 'src/app/_services/analysis-request.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-perform-analysis',
  templateUrl: './perform-analysis.component.html',
  styleUrls: ['./perform-analysis.component.css']
})
export class PerformAnalysisComponent implements OnInit {

  /**
   * 
   */
 id: number;

 /**
  * 
  */
 request: object;

 /**
  * 
  */
 analysis = [];

 constructor(
   private activatedRoute: ActivatedRoute,
   private analysisRequestService: AnalysisRequestService,
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.id = params.id;
     this.analysisRequestService.findById(this.id).subscribe(res => { 
       this.request = res;
       this.analysis = JSON.parse(this.request['analysis']);
      })
    })
 }

 /**
  * 
  */
 setPerformExams(){
   alert()
 }

}
