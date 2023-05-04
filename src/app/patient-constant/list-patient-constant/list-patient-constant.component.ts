import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientConstantService } from 'src/app/_services/patient-constant.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-list-patient-constant',
  templateUrl: './list-patient-constant.component.html',
  styleUrls: ['./list-patient-constant.component.css']
})
export class ListPatientConstantComponent implements OnInit {

  
   /**
   * page title
   */
  title= "Suivi des constantes du patient";

 /**
  * patient id 
  */
 patientId: number;

 /**
 * the component name 
 */
component: string;

 constructor(
   private activatedRoute: ActivatedRoute,
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.patientId = params.patientId;
   })

   this.component=this.activatedRoute.snapshot.component['name'];
 }

}
