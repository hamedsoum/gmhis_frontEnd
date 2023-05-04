import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article-supplier',
  templateUrl: './list-article-supplier.component.html',
  styleUrls: ['./list-article-supplier.component.css']
})
export class ListArticleSupplierComponent implements OnInit {

   /**
   * title to display
   */
    title='Liste des fournisseurs'; 

  constructor() { }

  ngOnInit(): void {
  }

}
