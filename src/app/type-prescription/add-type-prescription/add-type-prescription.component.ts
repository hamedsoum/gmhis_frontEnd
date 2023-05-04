import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypePrescriptionService } from 'src/app/_services/type-prescription.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-type-prescription',
  templateUrl: './add-type-prescription.component.html',
  styleUrls: ['./add-type-prescription.component.css']
})
export class AddTypePrescriptionComponent implements OnInit {

  /**
    * title to display
    */
   title = 'Creer une ordonnance type';

   constructor(
     private router: Router,
     private alertService: AlertService,
     private prescriptionService: TypePrescriptionService
   ) { }
 
   ngOnInit(): void {
 
   }
 
   /**
    * add a new object
    * @param data object
    * 
    */
   save(data) {
 
     let prescription = data.prescription;
     let action = data.action;
 
     this.prescriptionService.save(prescription).subscribe(prescription => {
           this.router.navigate(['/prescription-type/list']);
           this.alertService.success('Ordonnance type creé avec succès')
     },
     error => {
       this.alertService.error(error);
     });
   }
}
