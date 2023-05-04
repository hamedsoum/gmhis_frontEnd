import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-type-cro-family',
  templateUrl: './list-type-cro-family.component.html',
  styleUrls: ['./list-type-cro-family.component.css']
})
export class ListTypeCroFamilyComponent implements OnInit {

   /**
   * page title
   */
  title="Liste des Familles de CRO"; 

  constructor() { }

  ngOnInit(): void {
  }

}
