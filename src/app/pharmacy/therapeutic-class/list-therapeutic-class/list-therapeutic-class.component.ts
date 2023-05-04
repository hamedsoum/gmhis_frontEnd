import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-therapeutic-class',
  templateUrl: './list-therapeutic-class.component.html',
  styleUrls: ['./list-therapeutic-class.component.css']
})
export class ListTherapeuticClassComponent implements OnInit {

  /**
 * title to display
 */
  title = 'Liste des classes therapeutiques';

  constructor() { }

  ngOnInit(): void {
  }

}
