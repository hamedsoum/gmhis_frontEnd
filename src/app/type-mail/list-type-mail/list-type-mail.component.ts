import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-type-mail',
  templateUrl: './list-type-mail.component.html',
  styleUrls: ['./list-type-mail.component.css']
})
export class ListTypeMailComponent implements OnInit {
  
  /**
   * page title
   */
  title="Liste des courier types";

  constructor(){}

  ngOnInit() { }
}
