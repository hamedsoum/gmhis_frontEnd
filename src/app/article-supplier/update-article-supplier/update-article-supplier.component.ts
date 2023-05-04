import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-update-article-supplier',
  templateUrl: './update-article-supplier.component.html',
  styleUrls: ['./update-article-supplier.component.css']
})
export class UpdateArticleSupplierComponent implements OnInit {
/**
  * articleSupplier id 
  */
 articleSupplierId: number;

 /**
  * title to display
  */
 title = "Modification d'un fournisseur";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private articleSupplierService: ArticleSupplierService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.articleSupplierId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let articleSupplier = data.articleSupplier;
   let action = data.action;
   this.articleSupplierService.update(articleSupplier).subscribe(res => {
     this.router.navigate(['/article-supplier/list']);
     this.alertService.success('fournisseur modifiée avec succès'); 
   });

 }

}
