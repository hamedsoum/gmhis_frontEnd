import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathologyService } from 'src/app/_services/pathology.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-pathology',
  templateUrl: './add-pathology.component.html',
  styleUrls: ['./add-pathology.component.css']
})
export class AddPathologyComponent implements OnInit {

  /**
    * title to display
    */
  title = 'Ajouter une pathologie';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private pathologyService: PathologyService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let pathology = data.pathology;
    let action = data.action;

    this.pathologyService.save(pathology).subscribe(
      res => {
        switch (action) {
          case 'save':
            this.router.navigate(['/pathology/list']);
            this.alertService.success('Pathologie ajouté avec succès')
            break;

          case 'save_and_new':
            this.router.navigate(['/pathology/add']);
            this.alertService.success('Pathologie ajouté avec succès')

            break;

          default: this.router.navigate(['/pathology/list']);
            this.alertService.error('Ajout annulée')

            break;
        }
      }, error => {
        this.alertService.error(error);
      });

  }

}
