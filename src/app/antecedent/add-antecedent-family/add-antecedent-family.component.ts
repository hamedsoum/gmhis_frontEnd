import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AntecedentFamilyService } from 'src/app/_services/antecedent-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-antecedent-family',
  templateUrl: './add-antecedent-family.component.html',
  styleUrls: ['./add-antecedent-family.component.css']
})
export class AddAntecedentFamilyComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter une famille d\'antécédents';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private antecedentFamilyService: AntecedentFamilyService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let antecedentFamily = data.antecedentFamily;
    let action = data.action;

    this.antecedentFamilyService.save(antecedentFamily).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/antecedent/list-family']);
             this.alertService.success('Famille d\'antécédent ajouté avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/antecedent/add-family']);
               this.alertService.success('Famille d\'antécédent ajouté avec succès')
               
               break;
               
               default: this.router.navigate(['/antecedent/list-family']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });

  }

}
