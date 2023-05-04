import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService } from 'src/app/_services/facility.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {

  
  /**
  * facility id 
  */
 facilityId: number;

 /**
  * title to display
  */
 title = "Modification d'un etablissement";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private facilityService: FacilityService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.facilityId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let facility = data.facility;
   let action = data.action;
   this.facilityService.update(facility).subscribe(res => {
     this.router.navigate(['/facility/list']);
     this.alertService.success('Etablissement modifié avec succès'); 
   });

 }
}
