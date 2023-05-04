import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CashRegisterService } from 'src/app/_services/cash-register.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-cash-register',
  templateUrl: './add-cash-register.component.html',
  styleUrls: ['./add-cash-register.component.css']
})
export class AddCashRegisterComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter une caisse';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private cashRegisterService: CashRegisterService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let cashRegister = data.cashRegister;
    let action = data.action;

    this.cashRegisterService.save(cashRegister).subscribe(cashRegister => {

      switch (action) {
        case 'save':
          this.router.navigate(['/cash-register/list']);
          this.alertService.success('Caisse ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/cash-register/add']);
          this.alertService.success('Caisse ajouté avec succès')

          break;

        default: this.router.navigate(['/cash-register/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    }, 
    error => {
      this.alertService.error(error);
    });

  }

}
