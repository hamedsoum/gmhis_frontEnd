import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-constant-domain',
  templateUrl: './update-constant-domain.component.html',
  styleUrls: ['./update-constant-domain.component.css']
})
export class UpdateConstantDomainComponent implements OnInit {

  
  /**
  * constant Type id 
  */
 constantDomainId: number;

 /**
  * title to display
  */
 title = "Modification d'un groupe de constantes";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private constantDomainService: ConstantDomainService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.constantDomainId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let constantDomain = data.constantDomain;
   let action = data.action;
   this.constantDomainService.update(constantDomain).subscribe(res => {
     this.router.navigate(['/constant-domain/list']);
     this.alertService.success('groupe modifié avec succès'); 
   });

 }

}
