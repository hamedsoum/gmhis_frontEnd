import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patient-in-wainting-room',
  templateUrl: './patient-in-wainting-room.component.html',
  styleUrls: ['./patient-in-wainting-room.component.css']
})
export class PatientInWaintingRoomComponent implements OnInit {

  /**
   * component name
   */
  component: string;
  
  /**
   * title to display
   */
  title="Salle d'attente";
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.component=this.activatedRoute.snapshot.component['name'];
    
  }

}
