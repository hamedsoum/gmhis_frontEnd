import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SymptomService } from 'src/app/_services/symptom.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-update-symptom',
  templateUrl: './update-symptom.component.html',
  styleUrls: ['./update-symptom.component.css']
})
export class UpdateSymptomComponent implements OnInit {
/**
  * symptom id 
  */
 symptomId: number;

 /**
  * title to display
  */
 title = "Modification d'un symptôme";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private symptomService: SymptomService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.symptomId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let symptom = data.symptom;
   let action = data.action;
   this.symptomService.update(symptom).subscribe(res => {
     this.router.navigate(['/symptom/list']);
     this.alertService.success('symptôme modifiée avec succès'); 
   });

 }

}
