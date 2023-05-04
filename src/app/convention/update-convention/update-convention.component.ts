import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConventionService } from 'src/app/_services/convention.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-convention',
  templateUrl: './update-convention.component.html',
  styleUrls: ['./update-convention.component.css']
})
export class UpdateConventionComponent implements OnInit {

/**
  * object id 
  */
 conventionId: number;

 /**
  * title to display
  */
 title = "Modification d'une convention";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private conventionService: ConventionService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.conventionId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let convention = data.convention;
   let action = data.action;
   this.conventionService.update(convention).subscribe(res => {
     this.router.navigate(['/convention/list']);
     this.alertService.success('Convention modifiée avec succès'); 
   });

 }

}
