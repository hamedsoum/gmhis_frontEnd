import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subscriber',
  templateUrl: './list-subscriber.component.html',
  styleUrls: ['./list-subscriber.component.css']
})
export class ListSubscriberComponent implements OnInit {

  /**
   * title to display
   */
  title='Liste des établissements garants';

  constructor() { }

  ngOnInit(): void {
  }

}
