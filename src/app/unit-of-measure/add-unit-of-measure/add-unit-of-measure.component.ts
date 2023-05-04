import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitOfMeasureService } from 'src/app/_services/unit-of-measure.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-unit-of-measure',
  templateUrl: './add-unit-of-measure.component.html',
  styleUrls: ['./add-unit-of-measure.component.css']
})
export class AddUnitOfMeasureComponent implements OnInit {

 /**
   * title to display
   */
  title = "Ajouter une unité de mesure";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private uomService: UnitOfMeasureService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let uom = data.uom;
    let action = data.action;
     
    this.uomService.save(uom).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['/uom/list']);
          this.alertService.success('Unité de mesure ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/uom/add']);
          this.alertService.success('Unité de mesure ajouté avec succès')

          break;

        default: this.router.navigate(['/uom/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }

}
