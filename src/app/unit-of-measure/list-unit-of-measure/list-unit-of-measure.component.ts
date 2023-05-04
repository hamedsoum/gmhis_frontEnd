import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-unit-of-measure',
  templateUrl: './list-unit-of-measure.component.html',
  styleUrls: ['./list-unit-of-measure.component.css']
})
export class ListUnitOfMeasureComponent implements OnInit {

  /**
   * title to displays
   */
  title="Liste des unités de mesures";

  constructor() { }

  ngOnInit(): void {
  }

}
