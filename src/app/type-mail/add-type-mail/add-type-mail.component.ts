import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeMailService } from 'src/app/_services/type-mail.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-type-mail',
  templateUrl: './add-type-mail.component.html',
  styleUrls: ['./add-type-mail.component.css']
})
export class AddTypeMailComponent implements OnInit {

 /**
   * title to display
   */
  title = "Ajouter un courier type";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private typeMailService: TypeMailService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let mailType = data.mailType;
    let action = data.action;
     
    this.typeMailService.save(mailType).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['/mail-type/list']);
          this.alertService.success('Elément ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/mail-type/add']);
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
