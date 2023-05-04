import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActFamilyService } from 'src/app/_services/act-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-act-family',
  templateUrl: './add-act-family.component.html',
  styleUrls: ['./add-act-family.component.css']
})
export class AddActFamilyComponent implements OnInit {

  /**
   * title to display
   */
  title = "Ajouter un famille d'acte";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private actFamilyService: ActFamilyService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let actFamily = data.actFamily;
    let action = data.action;
     
    this.actFamilyService.save(actFamily).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['act/list-family']);
          this.alertService.success('Famille d\'actes ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['act/add-family']);
          this.alertService.success('Famille d\'actes ajouté avec succès')

          break;

        default: this.router.navigate(['act/list-family']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }


}
