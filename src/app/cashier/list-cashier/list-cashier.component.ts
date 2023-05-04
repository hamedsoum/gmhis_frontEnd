import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cashier',
  templateUrl: './list-cashier.component.html',
  styleUrls: ['./list-cashier.component.css']
})
export class ListCashierComponent implements OnInit {

    /**
   * title to display
   */
  title = 'Liste des caissiers'; 

  constructor() { }

  ngOnInit(): void {
  }

}
