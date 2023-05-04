import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActCodeService } from 'src/app/_services/act-code.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-act-code',
  templateUrl: './add-act-code.component.html',
  styleUrls: ['./add-act-code.component.css']
})
export class AddActCodeComponent implements OnInit {
  
   /**
   * title to display
   */
  title = "Ajouter un code acte";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private actCodeService: ActCodeService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let actCode = data.actCode;
    let action = data.action;
     
    this.actCodeService.save(actCode).subscribe(actCode => {

      switch (action) {
        case 'save':
          this.router.navigate(['act/list-code']);
          this.alertService.success('Code ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['act/add-code']);
          this.alertService.success('Code ajouté avec succès')

          break;

        default: this.router.navigate(['act/list-code']);
          this.alertService.error('Ajout annulée')

          break;
      }
    }, 
    error => {
      this.alertService.error(error);
    });

  }

}
