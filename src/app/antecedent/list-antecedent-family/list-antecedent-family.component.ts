import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-antecedent-family',
  templateUrl: './list-antecedent-family.component.html',
  styleUrls: ['./list-antecedent-family.component.css']
})
export class ListAntecedentFamilyComponent implements OnInit {

  /**
   * page title
   */

  title= "Liste des Familles d'antécédents";
  
  constructor() { }

  ngOnInit(): void {
  }

}
