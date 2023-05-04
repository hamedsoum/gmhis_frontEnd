import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CashierService } from 'src/app/_services/cashier.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-cashier',
  templateUrl: './add-cashier.component.html',
  styleUrls: ['./add-cashier.component.css']
})
export class AddCashierComponent implements OnInit {

   /**
   * title to display
   */
  title = "Ajouter un caissier";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private cashierService: CashierService
  ) { }

  ngOnInit(): void { }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let cashier = data.cashier;
    let action = data.action;
     
    this.cashierService.save(cashier).subscribe(cashier => {

      switch (action) {
        case 'save':
          this.router.navigate(['/cashier/list']);
          this.alertService.success('Caissier ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/cashier/add']);
          this.alertService.success('Caissier ajoutée avec succès')

          break;

        default: this.router.navigate(['/cashier/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error)
    }
    );
  }

}
