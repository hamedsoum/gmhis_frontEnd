import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-convention',
  templateUrl: './list-convention.component.html',
  styleUrls: ['./list-convention.component.css']
})
export class ListConventionComponent implements OnInit {
  /**
   * title to display
   */
  title = 'Liste des conventions';

  constructor() { }

  ngOnInit(): void {
  }

}
