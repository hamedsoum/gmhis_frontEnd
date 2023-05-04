import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantTypeService } from 'src/app/_services/constant-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-constant-type',
  templateUrl: './add-constant-type.component.html',
  styleUrls: ['./add-constant-type.component.css']
})
export class AddConstantTypeComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter une constante type';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private constantTypeService: ConstantTypeService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let constantType = data.constantType;
    let action = data.action;
    let constantOptions = data.constantOptions; 

    this.constantTypeService.save(constantType).subscribe(
      res => {
        if (res) {
          if (constantOptions.length > 0) {
            constantOptions.forEach(option => {

              let newOption = [{
                active: option['active'],
                constantType: res['id'],
                id: 0,
                order: option['order'],
                value: option['value']
              }];
              
              this.constantTypeService.setConstantOption(newOption).subscribe(res => {});

            });
          }
        }

        switch (action) {
          case 'save':
            this.router.navigate(['/constant-type/list']);
            this.alertService.success('Constante type ajoutée avec succès')
            break;

          case 'save_and_new':
            this.router.navigate(['/constant-type/add']);
            this.alertService.success('Constante type ajoutée avec succès')

            break;

          default: this.router.navigate(['/constant-type/list']);
            this.alertService.error('Ajout annulée')

            break;
        }
      }, error => {
        this.alertService.error(error);
      });
  }

}
