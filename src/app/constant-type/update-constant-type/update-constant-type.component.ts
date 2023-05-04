import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantTypeService } from 'src/app/_services/constant-type.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-constant-type',
  templateUrl: './update-constant-type.component.html',
  styleUrls: ['./update-constant-type.component.css']
})
export class UpdateConstantTypeComponent implements OnInit {


  /**
  * constant Type id 
  */
  constantTypeId: number;

  /**
   * title to display
   */
  title = "Modification d'une constante type";


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private constantTypeService: ConstantTypeService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.constantTypeId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let constantType = data.constantType;
    let action = data.action;
    let constantOptions = data.constantOptions;

    this.constantTypeService.update(constantType).subscribe(res => {

      if (constantOptions.length > 0) {
        this.constantTypeService.removeConstantOption([constantOptions[0]]).subscribe(res => { });
        
        constantOptions.forEach(option => {

          let newOption = [{
            active: option['active'],
            constantType: constantType.id,
            id: 0,
            order: option['order'],
            value: option['value']
          }];

          this.constantTypeService.setConstantOption(newOption).subscribe(res => {

          });

        });
      }

      this.router.navigate(['/constant-type/list']);
      this.alertService.success('Constante type modifiée avec succès');
    });
  }

}
