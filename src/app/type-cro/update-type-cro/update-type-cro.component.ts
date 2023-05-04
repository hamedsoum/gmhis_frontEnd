import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCroService } from 'src/app/_services/type-cro.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-type-cro',
  templateUrl: './update-type-cro.component.html',
  styleUrls: ['./update-type-cro.component.css']
})
export class UpdateTypeCroComponent implements OnInit {

  
  /**
  *  id 
  */
 typeCroId: number;

 /**
  * title to display
  */
 title = "Modification d'un CRO type";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private typeCroService: TypeCroService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.typeCroId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let croType = data.croType;
   let action = data.action;
   this.typeCroService.update(croType).subscribe(res => {
     this.router.navigate(['/cro-type/list']);
     this.alertService.success('CRO type modifié avec succès'); 
   });

 }


}
