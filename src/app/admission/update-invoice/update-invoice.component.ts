import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionInvoiceService } from 'src/app/_services/admission-invoice.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {

  
  /**
  * admission id 
  */
 invoiceId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'une facture";
 

 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private invoiceService: AdmissionInvoiceService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.invoiceId = params.id;
   })
 }

 /**
  * update existing incoice
  * @param data object
  */
 save(data) {
  
   let invoice = data.invoice;
   let action = data.action;
   
   this.invoiceService.update(invoice).subscribe(res => {
         this.router.navigate(['/admission/invoice/list']);
         this.alertService.success('Facture modifiée avec succès');
   });

 }

}
