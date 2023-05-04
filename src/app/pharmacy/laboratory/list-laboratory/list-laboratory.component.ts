import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-laboratory',
  templateUrl: './list-laboratory.component.html',
  styleUrls: ['./list-laboratory.component.css']
})
export class ListLaboratoryComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des laboratoires';

  constructor() { }

  ngOnInit(): void {
  }

}
