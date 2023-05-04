import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleGroupService } from 'src/app/_services/article-group.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-update-article-group',
  templateUrl: './update-article-group.component.html',
  styleUrls: ['./update-article-group.component.css']
})
export class UpdateArticleGroupComponent implements OnInit {

    
  /**
  * articleGroup id 
  */
 articleGroupId: number;

 /**
  * title to display
  */
 title = "Modification d'une famille d'article";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private articleGroupService: ArticleGroupService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.articleGroupId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let articleGroup = data.articleGroup;
   let action = data.action;
   this.articleGroupService.update(articleGroup).subscribe(res => {
     this.router.navigate(['/article-group/list']);
     this.alertService.success("famille d'article modifiée avec succès"); 
   });

 }

}
