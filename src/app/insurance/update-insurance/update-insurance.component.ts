import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from 'src/app/_services/insurance.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.css']
})
export class UpdateInsuranceComponent implements OnInit {


  /**
  * insurance id 
  */
  insuranceId: number;

  /**
   * title to display
   */
  title = "Modification d'une assurance / mutelle";


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private insuranceService: InsuranceService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.insuranceId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let insurance = data.insurance;
    let action = data.action;
    this.insuranceService.update(insurance).subscribe(res => {
      this.router.navigate(['/insurance/list']);
      this.alertService.success('Assurance modifiée avec succès'); 
    });

  }

}
