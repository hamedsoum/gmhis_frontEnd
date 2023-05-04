import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antecedent } from 'src/app/_models/antecedent.model';
import { AntecedentService } from 'src/app/_services/antecedent.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-antecedent',
  templateUrl: './update-antecedent.component.html',
  styleUrls: ['./update-antecedent.component.css']
})
export class UpdateAntecedentComponent implements OnInit {


  /**
  * antécédant id 
  */
  antecedentId: number;

  /**
   * title to display
   */
  title = "Modification d'antécédant";


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private antecedentService: AntecedentService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.antecedentId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let antecedent = data.antecedent;
    let action = data.action;

    this.antecedentService.update(antecedent).subscribe(antecedent => {
      this.router.navigate(['/antecedent/list']);
      this.alertService.success('antecedent modifié avec succès');
    });

  }

}
