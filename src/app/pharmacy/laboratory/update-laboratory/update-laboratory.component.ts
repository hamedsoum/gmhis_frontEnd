import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoryService } from 'src/app/_services/laboratory.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-laboratory',
  templateUrl: './update-laboratory.component.html',
  styleUrls: ['./update-laboratory.component.css']
})
export class UpdateLaboratoryComponent implements OnInit {

  /**
  * object id 
  */
 laboratoryId: number;

 /**
  * title to display
  */
 title = "Modification d'un laboratoire";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private labratoryService: LaboratoryService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.laboratoryId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let laboratory = data.laboratory;
   let action = data.action;
   this.labratoryService.update(laboratory).subscribe(res => {
     this.router.navigate(['/pharmacy/laboratory-list']);
     this.alertService.success('Laboratoire modifié avec succès'); 
   });

 }

}
