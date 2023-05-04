import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-locality',
  templateUrl: './list-locality.component.html',
  styleUrls: ['./list-locality.component.css']
})
export class ListLocalityComponent implements OnInit {

  /**
 * title do display
 */
  title = 'Liste des localités';

  constructor() { }

  ngOnInit(): void {
  }

}
