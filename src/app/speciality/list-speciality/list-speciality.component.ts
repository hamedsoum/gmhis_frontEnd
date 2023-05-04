import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-speciality',
  templateUrl: './list-speciality.component.html',
  styleUrls: ['./list-speciality.component.css']
})
export class ListSpecialityComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des spécialités';

  constructor() { }

  ngOnInit(): void {
  }

}
