import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCroFamilyService } from 'src/app/_services/type-cro-family.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-type-cro-family',
  templateUrl: './add-type-cro-family.component.html',
  styleUrls: ['./add-type-cro-family.component.css']
})
export class AddTypeCroFamilyComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Ajouter un famille de CRO';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private typeCroFamilyService: TypeCroFamilyService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let typeCroFamily = data.typeCroFamily;
    let action = data.action;

    this.typeCroFamilyService.save(typeCroFamily).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/cro-family/list']);
             this.alertService.success('Famille de CRO ajoutée avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/cro-family/add']);
               this.alertService.success('Famille de CRO ajoutée avec succès')
               
               break;
               
               default: this.router.navigate(['/cro-family/list']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });
  }
}
