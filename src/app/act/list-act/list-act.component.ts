import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-act',
  templateUrl: './list-act.component.html',
  styleUrls: ['./list-act.component.css']
})
export class ListActComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Liste des actes'; 
  constructor() { }

  ngOnInit(): void {
  }

}
