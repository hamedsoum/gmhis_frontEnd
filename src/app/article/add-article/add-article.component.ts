import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticeService } from 'src/app/_services/artice.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {



   
    /**
      * title to display
      */
     title = "Ajouter une article";
  
  
    constructor(
      private router: Router,
      private alertService: AlertService,
      private articleService : ArticeService
    ) { }
  
    ngOnInit(): void {
    }
    /**
     * add a new object
     * @param data object
     * 
     */
     save(data) {
  
      let article = data.article;
      let action = data.action;
      console.log(article);
      this.articleService.save(article).subscribe(
        res => {
          switch (action) {
            case 'save':
              this.router.navigate(['/article/list']);
              this.alertService.success("article  ajouté avec succès")
              break;
  
            case 'save_and_new':
              this.router.navigate(['/article/add']);
              this.alertService.success("article  ajouté avec succès")
  
              break;
              
            default: this.router.navigate(['/article/list']);
              this.alertService.error('Ajout annulée')
  
              break;
          }
        }, error => {
          this.alertService.error(error);
        });
  
    }
  
  }