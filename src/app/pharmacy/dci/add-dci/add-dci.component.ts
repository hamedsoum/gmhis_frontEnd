import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DciService } from 'src/app/_services/dci.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-dci',
  templateUrl: './add-dci.component.html',
  styleUrls: ['./add-dci.component.css']
})
export class AddDciComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer une DCI';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private dciService: DciService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let dci = data.dci;
     let action = data.action;
 
     this.dciService.save(dci).subscribe(dci => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/pharmacy/dci-list']);
           this.alertService.success('DCI crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/pharmacy/dci-add']);
           this.alertService.success('DCI crée avec succès')
 
           break;
 
         default: this.router.navigate(['/pharmacy/dci-list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }

}
