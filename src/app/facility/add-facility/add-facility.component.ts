import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityService } from 'src/app/_services/facility.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

 /**
   * title to display
   */
  title = 'Ajouter un établissement sanitaire';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private facilityService: FacilityService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let facility = data.facility;
    let action = data.action;

    this.facilityService.save(facility).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/facility/list']);
             this.alertService.success('Etablissement ajouté avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/facility/add']);
               this.alertService.success('Etablissement ajouté avec succès')
               
               break;
               
               default: this.router.navigate(['/facility/list']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });

  }
}
