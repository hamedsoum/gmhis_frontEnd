import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cash-register',
  templateUrl: './list-cash-register.component.html',
  styleUrls: ['./list-cash-register.component.css']
})
export class ListCashRegisterComponent implements OnInit {

  /**
   * title do display
   */

   title = 'Liste des caisses';
   
  constructor() { }

  ngOnInit(): void {
  }

}
