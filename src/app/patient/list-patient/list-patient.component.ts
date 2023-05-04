import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  /**
   * current component name 
   */
  component: string;

  constructor( 
    private activatedRoute: ActivatedRoute,
  ){
    
  }
  ngOnInit () {
    this.component=this.activatedRoute.snapshot.component['name'];
   }
}
