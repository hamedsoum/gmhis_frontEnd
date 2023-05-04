import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-act-family',
  templateUrl: './list-act-family.component.html',
  styleUrls: ['./list-act-family.component.css']
})
export class ListActFamilyComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des familles d\'actes';
  constructor() { }

  ngOnInit(): void {
  }

}
