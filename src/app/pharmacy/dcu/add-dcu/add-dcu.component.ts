import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DcuService } from 'src/app/_services/dcu.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-dcu',
  templateUrl: './add-dcu.component.html',
  styleUrls: ['./add-dcu.component.css']
})
export class AddDcuComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer une unité de conditionnement';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private dcuService: DcuService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let dcu = data.dcu;
     let action = data.action;
 
     this.dcuService.save(dcu).subscribe(dcu => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/pharmacy/dcu-list']);
           this.alertService.success('Unité crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/pharmacy/dcu-add']);
           this.alertService.success('Unité crée avec succès')
 
           break;
 
         default: this.router.navigate(['/pharmacy/dcu-list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }


}
