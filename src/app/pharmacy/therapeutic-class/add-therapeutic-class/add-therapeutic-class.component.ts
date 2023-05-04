import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TherapeuticClassService } from 'src/app/_services/therapeutic-class.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-therapeutic-class',
  templateUrl: './add-therapeutic-class.component.html',
  styleUrls: ['./add-therapeutic-class.component.css']
})
export class AddTherapeuticClassComponent implements OnInit {

 /**
    * title to display
    */
   title = 'Creer une classe thérapeutique';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private theraClassService: TherapeuticClassService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let theraClass = data.theraClass;
     let action = data.action;
 
     this.theraClassService.save(theraClass).subscribe(theraClass => {
 
       switch (action) {
         case 'save':
           this.router.navigate(['/pharmacy/therapeutic-class-list']);
           this.alertService.success('Classe thérapeutique crée avec succès')
           break;
 
         case 'save_and_new':
           this.router.navigate(['/pharmacy/therapeutic-class-add']);
           this.alertService.success('Classe thérapeutique crée avec succès')
 
           break;
 
         default: this.router.navigate(['/pharmacy/therapeutic-class-list']);
           this.alertService.error('Creation annulée')
 
           break;
       }
     },
     error => {
       this.alertService.error(error);
     });
   }

}
