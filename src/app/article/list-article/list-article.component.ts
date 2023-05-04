import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

    /**
   * page title
   */
     title= "Liste des article";
  constructor() { }

  ngOnInit(): void {
  }

}
