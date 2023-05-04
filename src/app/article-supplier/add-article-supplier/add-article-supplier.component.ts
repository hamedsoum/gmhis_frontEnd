import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleSupplierService } from 'src/app/_services/article-supplier.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
@Component({
  selector: 'app-add-article-supplier',
  templateUrl: './add-article-supplier.component.html',
  styleUrls: ['./add-article-supplier.component.css']
})
export class AddArticleSupplierComponent implements OnInit {

  
    /**
     * title to display
     */
    title = 'Ajouter un fournisseur';
  
    constructor(
      private router: Router,
      private alertService: AlertService,
      private articleSupplierService: ArticleSupplierService
    ) { }
  
    ngOnInit(): void {
  
    }
  
    /**
     * add a new object
     * @param data object
     * 
     */
    save(data) {
  
      let articleSupplier = data.articleSupplier;
      let action = data.action;
  
      this.articleSupplierService.save(articleSupplier).subscribe(
        res => {
           switch (action) {
             case 'save':
               this.router.navigate(['/article-supplier/list']);
               this.alertService.success('Assurance ajoutée avec succès')
               break;
               
               case 'save_and_new':
                 this.router.navigate(['/article-supplier/add']);
                 this.alertService.success('Assurance ajoutée avec succès')
                 
                 break;
                 
                 default: this.router.navigate(['/article-supplier/list']);
                 this.alertService.error('Ajout annulée')
                 
                 break;
              }
       },error => {
         this.alertService.error(error);
       });
  
    }
  
  }
  
