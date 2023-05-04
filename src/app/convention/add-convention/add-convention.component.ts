import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConventionService } from 'src/app/_services/convention.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-convention',
  templateUrl: './add-convention.component.html',
  styleUrls: ['./add-convention.component.css']
})
export class AddConventionComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer une convention';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private conventionService: ConventionService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let convention = data.convention;
     let action = data.action;
 
     this.conventionService.save(convention).subscribe(convention => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/convention/list']);
           this.alertService.success('Convention crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/convention/add']);
           this.alertService.success('Convention crée avec succès')
 
           break;
 
         default: this.router.navigate(['/convention/list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }
}
