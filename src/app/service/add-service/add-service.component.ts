import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicalServiceService } from 'src/app/_services/medicalService.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

   /**
   * title to display
   */
  title = "Ajouter un service";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private medicalService: medicalServiceService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let service = data.service;
    let action = data.action;
     
    this.medicalService.save(service).subscribe(service => {

      switch (action) {
        case 'save':
          this.router.navigate(['/service/list']);
          this.alertService.success('Service ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/service/add']);
          this.alertService.success('Service ajouté avec succès')

          break;

        default: this.router.navigate(['/service/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    }, 
    error => {
      this.alertService.error(error);
    });

  }

}
