import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.css']
})
export class ListRegionComponent implements OnInit {

  /**
   * title do display
   */
  title = 'Liste des regions';

  constructor() { }

  ngOnInit(): void {
  }

}
