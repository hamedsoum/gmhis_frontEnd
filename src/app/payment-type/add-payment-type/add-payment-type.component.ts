import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-payment-type',
  templateUrl: './add-payment-type.component.html',
  styleUrls: ['./add-payment-type.component.css']
})
export class AddPaymentTypeComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter un type de payement';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private ptService: PaymentTypeService
  ) { }

  ngOnInit(): void {}

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let paymentType = data.paymentType;
    let action = data.action;

    this.ptService.save(paymentType).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/payment-type/list']);
             this.alertService.success('Type de payement ajouté avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/payment-type/add']);
               this.alertService.success('Type de payement ajouté avec succès')
               
               break;
               
               default: this.router.navigate(['/payment-type/list']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });
  }
}
