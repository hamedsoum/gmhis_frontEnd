import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PracticianService } from 'src/app/_services/practician.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-practician',
  templateUrl: './add-practician.component.html',
  styleUrls: ['./add-practician.component.css']
})
export class AddPracticianComponent implements OnInit {

   /**
   * title to display
   */
  title = "Ajouter un praticien";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private practicianService: PracticianService
  ) { }

  ngOnInit(): void { }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let practician = data.practician;
    let action = data.action;
     
    this.practicianService.save(practician).subscribe(res => {
      switch (action) {
        case 'save':
          this.router.navigate(['/practician/list']);
          this.alertService.success('Praticien ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/practician/add']);
          this.alertService.success('Praticien ajouté avec succès')

          break;

        default: this.router.navigate(['/practician/list']);
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
