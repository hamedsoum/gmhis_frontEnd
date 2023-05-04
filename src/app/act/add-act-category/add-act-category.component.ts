import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActCategoryService } from 'src/app/_services/act-category.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-act-category',
  templateUrl: './add-act-category.component.html',
  styleUrls: ['./add-act-category.component.css']
})
export class AddActCategoryComponent implements OnInit {

 
   /**
   * title to display
   */
  title = "Ajouter une catégorie d'acte";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private actCategoryService: ActCategoryService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let actCategory = data.actCategory;
    let action = data.action;
     
    this.actCategoryService.save(actCategory).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['act/list-category']);
          this.alertService.success('Catégorie ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['act/add-category']);
          this.alertService.success('Catégorie ajouté avec succès')

          break;

        default: this.router.navigate(['act/list-category']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }

}
