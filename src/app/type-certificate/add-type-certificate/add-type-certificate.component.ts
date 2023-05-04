import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCertificateService } from 'src/app/_services/type-certificate.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-type-certificate',
  templateUrl: './add-type-certificate.component.html',
  styleUrls: ['./add-type-certificate.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddTypeCertificateComponent implements OnInit {

  /**
   * title to display
   */
  title = "Ajouter un certificat type";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private typeCertificateService: TypeCertificateService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let certificateType = data.certificateType;
    let action = data.action;
     
    this.typeCertificateService.save(certificateType).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['/certificate-type/list']);
          this.alertService.success('Elément ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/certificate-type/add']);
          this.alertService.success('Elément ajouté avec succès')

          break;

        default: this.router.navigate(['/certificat-type/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    }, 
    error => {
      this.alertService.error(error);
    });

  }


}
