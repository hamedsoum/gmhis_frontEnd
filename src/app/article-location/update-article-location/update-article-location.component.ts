import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleLocationService } from 'src/app/_services/article-location.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-update-article-location',
  templateUrl: './update-article-location.component.html',
  styleUrls: ['./update-article-location.component.css']
})
export class UpdateArticleLocationComponent implements OnInit {

     
  /**
  * articleLocation id 
  */
 articleLocationId: number;

 /**
  * title to display
  */
 title = "Modification d'un emplacement d'article";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private articleLocationService: ArticleLocationService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.articleLocationId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let articleLocation = data.articleLocation;
   let action = data.action;
   this.articleLocationService.update(articleLocation).subscribe(res => {
     this.router.navigate(['/article-location/list']);
     this.alertService.success('emplacement modifié avec succès'); 
   });

 }

}