import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { InsuranceService } from "./../../_services/insurance.service";

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  
  /**
   * title to display
   */
  title = 'Ajouter une assurance / mutuelle';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private insuranceService: InsuranceService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let insurance = data.insurance;
    let action = data.action;

    this.insuranceService.save(insurance).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/insurance/list']);
             this.alertService.success('Assurance ajoutée avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/insurance/add']);
               this.alertService.success('Assurance ajoutée avec succès')
               
               break;
               
               default: this.router.navigate(['/insurance/list']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });

  }

}
