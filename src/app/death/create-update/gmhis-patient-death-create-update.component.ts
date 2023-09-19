import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Patient } from "src/app/patient/patient";
import { PatientService } from "src/app/patient/patient.service";
import Swal from "sweetalert2";

@Component({selector: 'gmhis-patient-death', templateUrl: './gmhis-patient-death-create-update.component.html'})
export class GMHISPatientDeathCreateUpdate implements OnInit {

    @Input() styleClass?: string

    @Input() patient: Patient;

    @Output() saveEvent = new EventEmitter();
    deathDate: string;

    constructor(private patientService: PatientService,private modalService: NgbModal,
        ){}


    ngOnInit(): void {

    }

    onPatientDeath() {
        this.modalService.dismissAll();
        Swal.fire({
          title: `êtes vous sur de de vouloir declarer le patient ${this.patient.firstName} ${this.patient.lastName} Mort ?`,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'oui',
          denyButtonText: `Non`,
        }).then((result) => {
            this.patientService.updatePatientSetDeathDate(this.patient.id,this.deathDate).subscribe(
                (res: any) => {
                    if (result.isConfirmed) {
                        Swal.fire('Patient Declaré Décedé!', '', 'success')
                      } else if (result.isDenied) {
                        Swal.fire('')
                      }
                },
                (error: HttpErrorResponse) => {
                    console.error(error.message)
                }
              )
        
        })
      }
 
}