import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratoryService } from 'src/app/_services/laboratory.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.css']
})
export class AddLaboratoryComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer un laboratoire';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private laboratoryService: LaboratoryService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let laboratory = data.laboratory;
     let action = data.action;
 
     this.laboratoryService.save(laboratory).subscribe(laboratory => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/pharmacy/laboratory-list']);
           this.alertService.success('Laboratoire crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/pharmacy/laboratory-add']);
           this.alertService.success('Laboratoire crée avec succès')
 
           break;
 
         default: this.router.navigate(['/pharmacy/laboratory-list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }
}
