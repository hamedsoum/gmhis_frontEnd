import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pharmacological-form',
  templateUrl: './list-pharmacological-form.component.html',
  styleUrls: ['./list-pharmacological-form.component.css']
})
export class ListPharmacologicalFormComponent implements OnInit {

/**
 * title to display
 */
title = 'Liste des formes pharmacologiques';

  constructor() { }

  ngOnInit(): void {
  }

}
