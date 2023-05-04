import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-practician',
  templateUrl: './list-practician.component.html',
  styleUrls: ['./list-practician.component.css']
})
export class ListPracticianComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des praticiens';

  constructor() { }

  ngOnInit(): void {
  }

}
