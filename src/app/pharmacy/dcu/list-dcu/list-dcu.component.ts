import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dcu',
  templateUrl: './list-dcu.component.html',
  styleUrls: ['./list-dcu.component.css']
})
export class ListDcuComponent implements OnInit {

  /**
 * title to display
 */
  title = 'Liste des Unités de conditionnement';
  
  constructor() { }

  ngOnInit(): void {
  }

}
