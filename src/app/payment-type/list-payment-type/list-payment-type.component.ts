import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-payment-type',
  templateUrl: './list-payment-type.component.html',
  styleUrls: ['./list-payment-type.component.css']
})
export class ListPaymentTypeComponent implements OnInit {

   /**
   * page title
   */
  title= "Liste des types de payements";

  constructor() { }

  ngOnInit(): void {
  }

}
