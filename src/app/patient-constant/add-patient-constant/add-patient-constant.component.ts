import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientConstantService } from 'src/app/_services/patient-constant.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-patient-constant',
  templateUrl: './add-patient-constant.component.html',
  styleUrls: ['./add-patient-constant.component.css']
})
export class AddPatientConstantComponent implements OnInit {

 /**
   * title to display
   */
  title = 'Prise de nouvelles constantes';

  patientId: number;

/**
 * the component name 
 */
component: string;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private patientConstantService: PatientConstantService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.patientId = params.patientId;
   })
    this.component=this.activatedRoute.snapshot.component['name'];
  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let patientConstants = data.patientConstants;

    this.patientConstantService.save(patientConstants).subscribe(
      res => {
             this.router.navigate(['/patient-constant/list/'+patientConstants['patient']]);
             this.alertService.success('Constantes ajoutées avec succès')
             
     },error => {
       this.alertService.error(error); //Todo: uncomment
     });

  }
}
