import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/_services/notification.service';
import { NotificationType } from 'src/app/_utilities/notification-type-enum';
import { PrescriptionService } from '../services/prescription.service';

@Component({
  selector: 'app-prescription-collect',
  templateUrl: './prescription-collect.component.html',
  styleUrls: ['./prescription-collect.component.scss']
})
export class PrescriptionCollectComponent implements OnInit {
  showloading: boolean;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private prescriptionService : PrescriptionService,
    private notificationService: NotificationService,

  ) { }

  public perscriptionItems : any[] = [];

  public prescriptionItemsId : string[] = [];

  public prescriptionInfos = {};
    /**
   * form
   */
     public searchForm: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = new FormGroup({
      searchPrescription: new FormControl('', [Validators.required]),
    });
  }

  save(addFormContent){
    this.modalService.open(addFormContent, { size: 'xl' });
  }

  findPrescription(addFormContent){
    this.showloading = true;
    let searchPrescription = this.searchForm.get('searchPrescription').value;
    this.prescriptionService.retrievePrescription(searchPrescription).subscribe(
      (res : any) => {
        this.prescriptionInfos = res;        
        this.prescriptionService.getPrescriptionItemByPrescriptionId(this.prescriptionInfos['id']).subscribe(
          (res : any ) => {
            this.perscriptionItems = res;
            this.allPrescriptionWasCollected;
            this.showloading = false;
            this.searchForm.get('searchPrescription').setValue("");
          }
        )
        this.modalService.open(addFormContent, { size: 'xl' });  
      },
      (errorResponse : HttpErrorResponse) => {
        this.showloading = false;
        this.notificationService.notify(NotificationType.ERROR,"Veuillez saisir un numero correct ");
      }
    )
  }

  getPrescriptionItemsIdToCollected(event, perscriptionItemId){      
    if (this.prescriptionItemsId.indexOf(perscriptionItemId) == -1) {
        this.prescriptionItemsId.push(perscriptionItemId); 
      }else{
        this.prescriptionItemsId.splice(this.prescriptionItemsId.indexOf(perscriptionItemId),1);
      } 
  }

  collectedPrescription( invoicePrescriptionModal){
    // this.modalService.dismissAll();
    // this.modalService.open(invoicePrescriptionModal, { size: 'xl' });  
    this.prescriptionService.setPrescriptionItems(this.prescriptionItemsId).subscribe(
      (res : any) => {
        this.modalService.dismissAll();
        this.notificationService.notify(
          NotificationType.SUCCESS,
          "medicaments(s) collecté avec succès"
        );
        
      }
    )
  }


get allPrescriptionWasCollected() : boolean {    
    let perscriptionItemCollectedStatus:boolean[] = [];
    this.perscriptionItems.forEach(el =>{
      perscriptionItemCollectedStatus.push(el.collected);
    })    
    return perscriptionItemCollectedStatus.includes(false);
  }
}
