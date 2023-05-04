import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-patient-tag',
  templateUrl: './patient-tag.component.html',
  styleUrls: ['./patient-tag.component.css']
})
export class PatientTagComponent implements OnInit {

  @Input()
  patient : object;

  constructor() { }

  ngOnInit(): void {}

}
