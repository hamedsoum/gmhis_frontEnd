import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActCodeService } from 'src/app/_services/act-code.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-act-code',
  templateUrl: './update-act-code.component.html',
  styleUrls: ['./update-act-code.component.css']
})
export class UpdateActCodeComponent implements OnInit {

   
  /**
  * code id 
  */
 actCodeId: number;

 /**
  * title to display
  */
 title = "Modification d'un code d'actes";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private actCodeService: ActCodeService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.actCodeId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let actCode = data.actCode;
   let action = data.action;

   this.actCodeService.update(actCode).subscribe(res => {
     this.router.navigate(['/act/list-code']);
     this.alertService.success('Code modifié avec succès')
   })
 }

}
