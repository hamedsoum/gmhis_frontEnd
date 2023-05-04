import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCertificateService } from 'src/app/_services/type-certificate.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-type-certificate',
  templateUrl: './update-type-certificate.component.html',
  styleUrls: ['./update-type-certificate.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateTypeCertificateComponent implements OnInit {

  
  /**
  *  id 
  */
 typeCertificateId: number;

 /**
  * title to display
  */
 title = "Modification d'un certificat type";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private typeCertificateService: TypeCertificateService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.typeCertificateId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let certificateType = data.certificateType;
   let action = data.action;
   this.typeCertificateService.update(certificateType).subscribe(res => {
     this.router.navigate(['/certificate-type/list']);
     this.alertService.success('Certificat type modifié avec succès'); 
   });

 }

}
