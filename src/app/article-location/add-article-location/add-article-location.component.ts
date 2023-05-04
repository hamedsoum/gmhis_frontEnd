import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleLocationService } from 'src/app/_services/article-location.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-add-article-location',
  templateUrl: './add-article-location.component.html',
  styleUrls: ['./add-article-location.component.css']
})
export class AddArticleLocationComponent implements OnInit {

 
   
  /**
    * title to display
    */
   title = "Ajouter un emplacement d'article";


  constructor(
    private router: Router,
    private alertService: AlertService,
    private articlelocationService : ArticleLocationService
  ) { }

  ngOnInit(): void {
  }
  /**
   * add a new object
   * @param data object
   * 
   */
   save(data) {

    let articleLocation = data.articleLocation;
    let action = data.action;

    this.articlelocationService.save(articleLocation).subscribe(
      res => {
        switch (action) {
          case 'save':
            this.router.navigate(['/article-location/list']);
            this.alertService.success("emplacement d'article  ajouté avec succès")
            break;

          case 'save_and_new':
            this.router.navigate(['/article-location/add']);
            this.alertService.success("emplacement d'article  ajouté avec succès")

            break;

          default: this.router.navigate(['/article-location/list']);
            this.alertService.error('Ajout annulée')

            break;
        }
      }, error => {
        this.alertService.error(error);
      });

  }

}

