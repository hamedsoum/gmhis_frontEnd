import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-act-category',
  templateUrl: './list-act-category.component.html',
  styleUrls: ['./list-act-category.component.css']
})
export class ListActCategoryComponent implements OnInit {

   /**
   * title to display
   */
  title="Liste des Categories d'acte";

  constructor() { }

  ngOnInit(): void {
  }

}
