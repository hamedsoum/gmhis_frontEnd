import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CashierService } from 'src/app/_services/cashier.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-cashier',
  templateUrl: './update-cashier.component.html',
  styleUrls: ['./update-cashier.component.css']
})
export class UpdateCashierComponent implements OnInit {

 /**
  * object id 
  */
 cashierId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'un caissier";
 
 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private cashierService: CashierService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.cashierId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let cashier = data.cashier;
   let action = data.action;
   
   this.cashierService.update(cashier).subscribe(res => {
        this.router.navigate(['/cashier/list']);
        this.alertService.success('Caissier modifié avec succès')
   });
 }

}
