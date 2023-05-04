import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-constant-type',
  templateUrl: './list-constant-type.component.html',
  styleUrls: ['./list-constant-type.component.css']
})
export class ListConstantTypeComponent implements OnInit {

  /**
   * page title
   */
  title="Liste des constantes types";
  
  constructor() { }

  ngOnInit(): void {
  }

}
