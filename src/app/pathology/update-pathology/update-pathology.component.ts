import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathologyService } from 'src/app/_services/pathology.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-pathology',
  templateUrl: './update-pathology.component.html',
  styleUrls: ['./update-pathology.component.css']
})
export class UpdatePathologyComponent implements OnInit {

   
  /**
  * pathology id 
  */
 pathologyId: number;

 /**
  * title to display
  */
 title = "Modification d'une pathogie";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private pathologyService: PathologyService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.pathologyId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let pathology = data.pathology;
   let action = data.action;
   this.pathologyService.update(pathology).subscribe(res => {
     this.router.navigate(['/pathology/list']);
     this.alertService.success('Pathologie modifiée avec succès'); 
   });

 }

}
