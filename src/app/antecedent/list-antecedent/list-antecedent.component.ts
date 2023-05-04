import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-antecedent',
  templateUrl: './list-antecedent.component.html',
  styleUrls: ['./list-antecedent.component.css']
})
export class ListAntecedentComponent implements OnInit {

  /**
   * title to display
   */
  title='Liste des antecedents';
  
  constructor() { }

  ngOnInit(): void {
  }

}
