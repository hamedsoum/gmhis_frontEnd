import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

  /**
   * title to display
   */
  title= 'Liste des villes';
  
  constructor() { }

  ngOnInit(): void {
  }

}
