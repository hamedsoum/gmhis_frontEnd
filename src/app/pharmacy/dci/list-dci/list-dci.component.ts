import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dci',
  templateUrl: './list-dci.component.html',
  styleUrls: ['./list-dci.component.css']
})
export class ListDciComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des DCI';

  constructor() { }

  ngOnInit(): void {
  }

}
