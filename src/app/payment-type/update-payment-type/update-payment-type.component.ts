import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-payment-type',
  templateUrl: './update-payment-type.component.html',
  styleUrls: ['./update-payment-type.component.css']
})
export class UpdatePaymentTypeComponent implements OnInit {

  /**
  * payement id 
  */
 paymentTypeId: number;

 /**
  * title to display
  */
 title = "Modification d'un type de payement";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private ptService: PaymentTypeService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.paymentTypeId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let paymentType = data.paymentType;
   let action = data.action;
   this.ptService.update(paymentType).subscribe(res => {
     this.router.navigate(['/payment-type/list']);
     this.alertService.success('Type de payement modifié avec succès'); 
   });

 }

}
