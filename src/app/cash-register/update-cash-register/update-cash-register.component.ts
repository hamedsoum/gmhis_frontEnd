import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CashRegisterService } from 'src/app/_services/cash-register.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-cash-register',
  templateUrl: './update-cash-register.component.html',
  styleUrls: ['./update-cash-register.component.css']
})
export class UpdateCashRegisterComponent implements OnInit {

  /**
  * object id 
  */
  cashRegisterId: number;

  /**
  * title to display
  */
  title = "Modification d'une caisse";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cashRegisterService: CashRegisterService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cashRegisterId = params.id;
    })
  }

  /**
  * update existing object
  * @param data object
  */
  save(data) {

    let cashRegister = data.cashRegister;
    let action = data.action;

    this.cashRegisterService.update(cashRegister).subscribe(res => {
      this.router.navigate(['/cash-register/list']);
      this.alertService.success('Caisse modifiée avec succès');
    })
  }
}
