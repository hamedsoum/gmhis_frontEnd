import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacologicalFormService } from 'src/app/_services/pharmacological-form.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-pharmacological-form',
  templateUrl: './update-pharmacological-form.component.html',
  styleUrls: ['./update-pharmacological-form.component.css']
})
export class UpdatePharmacologicalFormComponent implements OnInit {

/**
  * object id 
  */
 pharmaFormId: number;

 /**
  * title to display
  */
 title = "Modification d'une forme pharmacologique";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private pharmaFormService: PharmacologicalFormService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.pharmaFormId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let pharmaForm = data.pharmaForm;
   let action = data.action;
   this.pharmaFormService.update(pharmaForm).subscribe(res => {
     this.router.navigate(['/pharmacy/pharmacological-form-list']);
     this.alertService.success('Forme pharmacologique modifiée avec succès'); 
   });

 }

}
