import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-admission',
  templateUrl: './list-admission.component.html',
  styleUrls: ['./list-admission.component.css']
})
export class ListAdmissionComponent implements OnInit {

  /**
   * title to display
   */
  title='Liste des admissions';
  constructor() { }

  ngOnInit(): void {
  }

}
