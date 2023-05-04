import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-district',
  templateUrl: './list-district.component.html',
  styleUrls: ['./list-district.component.css']
})
export class ListDistrictComponent implements OnInit {

  /**
   * title do display
   */
  title = 'Liste des districts';

  constructor() { }

  ngOnInit(): void {
  }

}
