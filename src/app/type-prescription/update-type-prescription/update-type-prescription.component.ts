import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypePrescriptionService } from 'src/app/_services/type-prescription.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-type-prescription',
  templateUrl: './update-type-prescription.component.html',
  styleUrls: ['./update-type-prescription.component.css']
})
export class UpdateTypePrescriptionComponent implements OnInit {

          
        
/**
  * object id 
  */
 prescriptionId: number;

 /**
  * title to display
  */
 title = "Modification d'une ordonance type";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private typePrescriptionService: TypePrescriptionService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.prescriptionId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let prescriptionType = data.prescription;
   
   let action = data.action;
   this.typePrescriptionService.update(prescriptionType).subscribe(res => {
     this.router.navigate(['/prescription-type/list']);
     this.alertService.success('Ordonance type modifiée avec succès'); 
   });

 }
}
