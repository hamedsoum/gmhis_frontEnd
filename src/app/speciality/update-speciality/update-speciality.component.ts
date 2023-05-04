import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialityService } from 'src/app/_services/speciality.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-speciality',
  templateUrl: './update-speciality.component.html',
  styleUrls: ['./update-speciality.component.css']
})
export class UpdateSpecialityComponent implements OnInit {

 
  /**
  * object id 
  */
 specialityId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'une spécialité";
 
 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private specialityService: SpecialityService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.specialityId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let speciality = data.speciality;
   let action = data.action;
   
   this.specialityService.update(speciality).subscribe(res => {
        this.router.navigate(['/speciality/list']);
        this.alertService.success('Spécialité modifiée avec succès')
   });
 }

}
