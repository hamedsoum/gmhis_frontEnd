import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TherapeuticClassService } from 'src/app/_services/therapeutic-class.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-therapeutic-class',
  templateUrl: './update-therapeutic-class.component.html',
  styleUrls: ['./update-therapeutic-class.component.css']
})
export class UpdateTherapeuticClassComponent implements OnInit {

   /**
  * object id 
  */
 theraClassId: number;

 /**
  * title to display
  */
 title = "Modification d'une classe thérapeutique";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private theraClassService: TherapeuticClassService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.theraClassId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let theraClass = data.theraClass;
   let action = data.action;
   this.theraClassService.update(theraClass).subscribe(res => {
   this.router.navigate(['/pharmacy/therapeutic-class-list']);
     this.alertService.success('Classe therapeutique modifiée avec succès'); 
   });

 }

}
