import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActFamilyService } from 'src/app/_services/act-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-act-family',
  templateUrl: './update-act-family.component.html',
  styleUrls: ['./update-act-family.component.css']
})
export class UpdateActFamilyComponent implements OnInit {

  
  /**
  * family id 
  */
 actFamilyId: number;

 /**
  * title to display
  */
 title = "Modification d'une Famille d'actes";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private actFamilyService: ActFamilyService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.actFamilyId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let actFamily = data.actFamily;
   let action = data.action;

   this.actFamilyService.update(actFamily).subscribe(res => {
     this.router.navigate(['/act/list-family']);
     this.alertService.success('Famille modifié avec succès')
   })
 }
}
