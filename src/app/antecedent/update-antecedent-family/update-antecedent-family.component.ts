import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-antecedent-family',
  templateUrl: './update-antecedent-family.component.html',
  styleUrls: ['./update-antecedent-family.component.css']
})
export class UpdateAntecedentFamilyComponent implements OnInit {

  /**
  * pathology id 
  */
 antecedentFamilyId: number;

 /**
  * title to display
  */
 title = "Modification d'une famille d'antécédents";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private antecedentFamilyService: AntecedentFamilyService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.antecedentFamilyId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let antecedentFamily = data.antecedentFamily;
   let action = data.action;
   this.antecedentFamilyService.update(antecedentFamily).subscribe(res => {
     this.router.navigate(['/antecedent/list-family']);
     this.alertService.success('Famille d\'antécédents modifiée avec succès'); 
   });

 }

}
