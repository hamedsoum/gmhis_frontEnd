import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article-location',
  templateUrl: './list-article-location.component.html',
  styleUrls: ['./list-article-location.component.css']
})
export class ListArticleLocationComponent implements OnInit {
  
   /**
   * page title
   */
    title= "Liste des emplacements d'article";

  constructor() { }

  ngOnInit(): void {
  }

}
