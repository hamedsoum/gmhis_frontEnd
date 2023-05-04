import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pathology',
  templateUrl: './list-pathology.component.html',
  styleUrls: ['./list-pathology.component.css']
})
export class ListPathologyComponent implements OnInit {

   /**
   * page title
   */
  title= "Liste des pathologies";

  constructor() { }

  ngOnInit(): void {
  }

}
