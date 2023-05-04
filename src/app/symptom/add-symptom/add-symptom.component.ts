import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymptomService } from 'src/app/_services/symptom.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-symptom',
  templateUrl: './add-symptom.component.html',
  styleUrls: ['./add-symptom.component.css']
})
export class AddSymptomComponent implements OnInit {

  
  /**
    * title to display
    */
   title = 'Ajouter un symptôme';


  constructor(
    private router: Router,
    private alertService: AlertService,
    private symptomService: SymptomService
  ) { }

  ngOnInit(): void {
  }
  /**
   * add a new object
   * @param data object
   * 
   */
   save(data) {

    let symptom = data.symptom;
    let action = data.action;

    this.symptomService.save(symptom).subscribe(
      res => {
        switch (action) {
          case 'save':
            this.router.navigate(['/symptom/list']);
            this.alertService.success('Symptômes ajouté avec succès')
            break;

          case 'save_and_new':
            this.router.navigate(['/symptom/add']);
            this.alertService.success('Symptômes ajouté avec succès')

            break;

          default: this.router.navigate(['/symptom/list']);
            this.alertService.error('Ajout annulée')

            break;
        }
      }, error => {
        this.alertService.error(error);
      });

  }

}
