import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActService } from 'src/app/_services/act.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-act',
  templateUrl: './update-act.component.html',
  styleUrls: ['./update-act.component.css']
})
export class UpdateActComponent implements OnInit {

  
  /**
  * act id 
  */
 actId: number;

 /**
  * title to display
  */
 title = "Modification d'un acte";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private actService: ActService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.actId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let act = data.act;
   let action = data.action;

   this.actService.update(act).subscribe(res => {
     this.router.navigate(['/act/list']);
     this.alertService.success('Acte modifié avec succès')
   })
 }
}
