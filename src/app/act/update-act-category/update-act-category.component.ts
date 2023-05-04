import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActCategoryService } from 'src/app/_services/act-category.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-act-category',
  templateUrl: './update-act-category.component.html',
  styleUrls: ['./update-act-category.component.css']
})
export class UpdateActCategoryComponent implements OnInit {

  /**
  * categorie id 
  */
  actCategoryId: number;

  /**
   * title to display
   */
  title = "Modification d'une catégorie d'actes";


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actCategoryService: ActCategoryService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.actCategoryId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let actCategory = data.actCategory;
    let action = data.action;

    this.actCategoryService.update(actCategory).subscribe(res => {
      this.router.navigate(['/act/list-category']);
      this.alertService.success('Catégorie modifié avec succès')
    })
  }
}
