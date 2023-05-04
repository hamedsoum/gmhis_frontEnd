import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdmissionService } from "./../../_services/admission.service";
import { AlertService } from "./../../_utility/alert/alert.service"; 

@Component({
  selector: 'app-update-admission',
  templateUrl: './update-admission.component.html',
  styleUrls: ['./update-admission.component.css']
})
export class UpdateAdmissionComponent implements OnInit {
 
  /**
  * admission id 
  */
  admissionId :  number;
  
  /**
   * title to display
   */
  title = "Modification d'admission";
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private admissionService: AdmissionService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       this.admissionId = params.id;
    })
  }

  /**
   * update existing admission
   * @param data object
   */
  save(data) {
   
    let admission = data.admission;
    let action = data.action;
    
    this.admissionService.update(admission).subscribe(res => {
          this.router.navigate(['/admission/list']);
          this.alertService.success('Admission modifiée avec succès')
    });

  }

}
