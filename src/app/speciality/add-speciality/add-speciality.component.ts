import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speciality } from 'src/app/_models/speciality.model';
import { SpecialityService } from 'src/app/_services/speciality.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrls: ['./add-speciality.component.css']
})
export class AddSpecialityComponent implements OnInit {

  /**
   * title to display
   */
  title = "Ajouter une spécialité";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private specialityService: SpecialityService
  ) { }

  ngOnInit(): void { }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let speciality = data.speciality;
    let action = data.action;
     
    this.specialityService.save(speciality).subscribe(speciality => {

      switch (action) {
        case 'save':
          this.router.navigate(['/speciality/list']);
          this.alertService.success('Spécialité ajoutée avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/speciality/add']);
          this.alertService.success('Spécialité ajoutée avec succès')

          break;

        default: this.router.navigate(['/speciality/list']);
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
