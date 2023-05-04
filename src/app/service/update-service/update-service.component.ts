import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

   
  /**
  * object id 
  */
 serviceId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'un service";
 

 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private medicalService: medicalServiceService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.serviceId = params.id;
      
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let object = data.service;
   let action = data.action;
   
   this.medicalService.update(object).subscribe(service => {
    
      this.router.navigate(['/service/list']);
      this.alertService.success('Service modifié avec succès');
   });

 }

}
