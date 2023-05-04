import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AdmissionService } from "./../../_services/admission.service";
import { Router } from "@angular/router";
import { AlertService } from "./../../_utility/alert/alert.service";
import { exit } from 'process';

@Component({
  selector: 'app-add-admission',
  templateUrl: './add-admission.component.html',
  styleUrls: ['./add-admission.component.css']
})
export class AddAdmissionComponent implements OnInit {

  /**
   * patient id
   */
  patientId: number;

  /**
   * title to display
   */
  title = 'Nouvelle admission';

  constructor(
    private activatedRoute: ActivatedRoute,
    private admissionService: AdmissionService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.patientId = params.patientId;
    })
  }

  /**
   * add a new admission
   * @param data object
   * 
   */
  save(data) {

    let admission = data.admission;
    let action = data.action;

    this.admissionService.save(admission).subscribe(admission => {
          this.router.navigate(['/admission/list']);
          this.alertService.success('Admission effectuée avec succès');
    });
  }
}
