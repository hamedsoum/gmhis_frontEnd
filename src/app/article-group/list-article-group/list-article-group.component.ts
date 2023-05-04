import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article-group',
  templateUrl: './list-article-group.component.html',
  styleUrls: ['./list-article-group.component.css']
})
export class ListArticleGroupComponent implements OnInit {

  
   /**
   * page title
   */
    title= "Liste des familles d'article";

  constructor() { }

  ngOnInit(): void {
  }

}
