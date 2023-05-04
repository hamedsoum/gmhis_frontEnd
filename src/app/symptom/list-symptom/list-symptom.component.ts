import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-symptom',
  templateUrl: './list-symptom.component.html',
  styleUrls: ['./list-symptom.component.css']
})
export class ListSymptomComponent implements OnInit {

   /**
   * page title
   */
    title= "Liste des symptômes";

  constructor() { }

  ngOnInit(): void {
  }

}
