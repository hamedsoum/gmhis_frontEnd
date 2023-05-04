import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeCertificate } from 'src/app/_models/typeCertificate.model';
import { TypeCertificateService } from 'src/app/_services/type-certificate.service';
import { deleteRow } from 'src/app/_utility/delete-row';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-type-certificate',
  templateUrl: './list-type-certificate.component.html',
  styleUrls: ['./list-type-certificate.component.css']
})
export class ListTypeCertificateComponent implements OnInit {                                           
  
   /**
   * page title
   */
  title="Liste des certificats types";

   ngOnInit(){ }
}
