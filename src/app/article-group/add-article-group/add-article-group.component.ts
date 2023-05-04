import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleGroupService } from 'src/app/_services/article-group.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-article-group',
  templateUrl: './add-article-group.component.html',
  styleUrls: ['./add-article-group.component.css']
})
export class AddArticleGroupComponent implements OnInit {

   
  /**
    * title to display
    */
   title = "Ajouter une famille d'article";


  constructor(
    private router: Router,
    private alertService: AlertService,
    private articlegroupService : ArticleGroupService
  ) { }

  ngOnInit(): void {
  }
  /**
   * add a new object
   * @param data object
   * 
   */
   save(data) {

    let articleGroup = data.articleGroup;
    let action = data.action;

    this.articlegroupService.save(articleGroup).subscribe(
      res => {
        switch (action) {
          case 'save':
            this.router.navigate(['/article-group/list']);
            this.alertService.success("famille d'article  ajouté avec succès")
            break;

          case 'save_and_new':
            this.router.navigate(['/article-group/add']);
            this.alertService.success("famille d'article  ajouté avec succès")

            break;

          default: this.router.navigate(['/article-group/list']);
            this.alertService.error('Ajout annulée')

            break;
        }
      }, error => {
        this.alertService.error(error);
      });

  }

}
