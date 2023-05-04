import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { AntecedentService } from "./../../_services/antecedent.service";

@Component({
  selector: 'app-add-antecedent',
  templateUrl: './add-antecedent.component.html',
  styleUrls: ['./add-antecedent.component.css']
})
export class AddAntecedentComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter un antecedant';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private antecedentService: AntecedentService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let antecedent = data.antecedent;
    let action = data.action;

    this.antecedentService.save(antecedent).subscribe(antecedent => {

      switch (action) {
        case 'save':
          this.router.navigate(['/antecedent/list']);
          this.alertService.success('Antecedent ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/antecedent/add']);
          this.alertService.success('Antecedent ajouté avec succès')

          break;

        default: this.router.navigate(['/antecedent/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => { 
      this.alertService.error(error);
    });

  }
}
