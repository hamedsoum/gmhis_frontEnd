import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-constant-domain',
  templateUrl: './list-constant-domain.component.html',
  styleUrls: ['./list-constant-domain.component.css']
})
export class ListConstantDomainComponent implements OnInit {

  /**
   * page title
   */
  title="Liste des Groupes de constantes";

  constructor() { }

  ngOnInit(): void {
  }

}
