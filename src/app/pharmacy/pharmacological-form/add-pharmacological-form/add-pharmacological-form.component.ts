import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacologicalFormService } from 'src/app/_services/pharmacological-form.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-pharmacological-form',
  templateUrl: './add-pharmacological-form.component.html',
  styleUrls: ['./add-pharmacological-form.component.css']
})
export class AddPharmacologicalFormComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer une forme pharmacologique';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private pharmaFormService: PharmacologicalFormService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let pharmaForm = data.pharmaForm;
     let action = data.action;
 
     this.pharmaFormService.save(pharmaForm).subscribe(pharmaForm => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/pharmacy/pharmacological-form-list']);
           this.alertService.success('Forme pharmacologique crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/pharmacy/pharmacological-form-add']);
           this.alertService.success('Forme pharmacologique crée avec succès')
 
           break;
 
         default: this.router.navigate(['/pharmacy/pharmacological-form-list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }

}
