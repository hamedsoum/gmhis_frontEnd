import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  /**
   * page title
   */
  title= "Liste de nos établissements sanitaires";
  
  constructor() { }

  ngOnInit(): void {
  }

}
