import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-act-code',
  templateUrl: './list-act-code.component.html',
  styleUrls: ['./list-act-code.component.css']
})
export class ListActCodeComponent implements OnInit {

   /**
   * title to display
   */
  title="Liste des Codes actes";
  constructor() { }

  ngOnInit(): void {
  }

}
