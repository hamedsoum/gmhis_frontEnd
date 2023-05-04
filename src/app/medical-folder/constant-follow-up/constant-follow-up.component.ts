import { Component, Input, OnInit } from '@angular/core';
import { PatientConstantService } from 'src/app/_services/patient-constant.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-constant-follow-up',
  templateUrl: './constant-follow-up.component.html',
  styleUrls: ['./constant-follow-up.component.css']
})
export class ConstantFollowUpComponent implements OnInit {

  @Input() 
  patientId: number;

  title = '';

  patientConstant : object;

  constructor(
    private patientConstantService : PatientConstantService,
    private alertService : AlertService) { }

  ngOnInit(): void { }

  save(data){

    let patientConstants = data.patientConstants;
   
    this.patientConstantService.save(patientConstants).subscribe(
      res => {
             this.patientConstant = res ;
             this.alertService.success('Constantes ajoutées avec succès')
             
     },error => {
       this.alertService.error(error);
     });

  }

}
