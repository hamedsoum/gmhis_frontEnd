import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActService } from 'src/app/_services/act.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-act',
  templateUrl: './add-act.component.html',
  styleUrls: ['./add-act.component.css']
})
export class AddActComponent implements OnInit {

   /**
   * title to display
   */
  title = "Ajouter un acte";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private actService: ActService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let act = data.act;
    let action = data.action;
     
    this.actService.save(act).subscribe(act => {

      switch (action) {
        case 'save':
          this.router.navigate(['act/list']);
          this.alertService.success('Acte ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['act/add']);
          this.alertService.success('Acte ajouté avec succès')

          break;

        default: this.router.navigate(['act/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    });

  }

}
