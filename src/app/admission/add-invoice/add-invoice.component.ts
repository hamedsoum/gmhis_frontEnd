import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionInvoice } from 'src/app/_models/admissionInvoice.model';
import { AdmissionInvoiceService } from 'src/app/_services/admission-invoice.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { AdmissionService } from "./../../_services/admission.service";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  
  /**
   * patient id
   */
  admissionId: number;

  /**
   * title to display
   */
  title = "Nouvelle facture d'admission";

/**
 * the component name 
 */
  component: string;

  /**
   * 
   */
  createdInvoice : AdmissionInvoice;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private admissionInvoiceService: AdmissionInvoiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.admissionId = Number(params.admissionId);

      if (isNaN(this.admissionId)) {
        this.router.navigate(['/patient/list']);
        this.alertService.error("Admission impossible car le patient n'existe pas")
      }

    })

    this.component=this.activatedRoute.snapshot.component['name'];

  }

  /**
   * add a new admission
   * @param data object
   * 
   */
  save(data) {
    
    let invoice = data.invoice;
    let action = data.action;
    
    this.admissionInvoiceService.save(invoice).subscribe(invoice => {
      this.router.navigate(['/admission/invoice/list']);
      this.alertService.success('Facturation effectuée avec succès');
    },
    eroor => {
      this.alertService.error('Une erreur est survenue, veillez recommenceer cette action!')
    });

  }

}
