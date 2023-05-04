import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantDomainService } from 'src/app/_services/constant-domain.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-constant-domain',
  templateUrl: './add-constant-domain.component.html',
  styleUrls: ['./add-constant-domain.component.css']
})
export class AddConstantDomainComponent implements OnInit {

  
  /**
   * title to display
   */
  title = 'Ajouter un groupe de constante';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private constantDomainService: ConstantDomainService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let constantDomain = data.constantDomain;
    let action = data.action;

    this.constantDomainService.save(constantDomain).subscribe(
      res => {
         switch (action) {
           case 'save':
             this.router.navigate(['/constant-domain/list']);
             this.alertService.success('Groupe de constante ajouté avec succès')
             break;
             
             case 'save_and_new':
               this.router.navigate(['/constant-domain/add']);
               this.alertService.success('Groupe de constante ajouté avec succès')
               
               break;
               
               default: this.router.navigate(['/constant-domain/list']);
               this.alertService.error('Ajout annulée')
               
               break;
            }
     },error => {
       this.alertService.error(error);
     });
  }

}
