import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCroService } from 'src/app/_services/type-cro.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-type-cro',
  templateUrl: './add-type-cro.component.html',
  styleUrls: ['./add-type-cro.component.css']
})
export class AddTypeCroComponent implements OnInit {

    /**
   * title to display
   */
  title = "Ajouter un CRO type";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private typeCroService: TypeCroService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let croType = data.croType;
    let action = data.action;
     
    this.typeCroService.save(croType).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['/cro-type/list']);
          this.alertService.success('Elément ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/cro-type/add']);
          this.alertService.success('Elément ajouté avec succès')

          break;

        default: this.router.navigate(['/certificat-type/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    }, 
    error => {
      this.alertService.error(error);
    });

  }

}
