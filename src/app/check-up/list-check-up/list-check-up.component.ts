import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-check-up',
  templateUrl: './list-check-up.component.html',
  styleUrls: ['./list-check-up.component.css']
})
export class ListCheckUpComponent implements OnInit {
/**
 * title to display
 */
title = 'Liste des bilans medicaux';

  constructor() { }

  ngOnInit(): void {
  }

}
