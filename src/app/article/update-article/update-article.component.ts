import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticeService } from 'src/app/_services/artice.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

    /**
    * article id 
    */
   articleId: number;
  
   /**
    * title to display
    */
   title = "Modification d'un article";
  
  
   constructor(
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private articleService: ArticeService,
     private alertService: AlertService
   ) { }
  
   ngOnInit(): void {
     this.activatedRoute.params.subscribe(params => {
       this.articleId = params.id;
     })
   }
  
   /**
    * update existing object
    * @param data object
    */
   save(data) {
  
     let article = data.article;
     let action = data.action;
     
     this.articleService.update(article).subscribe(res => {
       this.router.navigate(['/article/list']);
       this.alertService.success("article modifiée avec succès"); 
     });
  
   }
  
  }