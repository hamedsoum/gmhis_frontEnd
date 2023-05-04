import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeMailService } from 'src/app/_services/type-mail.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-type-mail',
  templateUrl: './update-type-mail.component.html',
  styleUrls: ['./update-type-mail.component.css']
})
export class UpdateTypeMailComponent implements OnInit {

 
  /**
  *  id 
  */
 typeMailId: number;

 /**
  * title to display
  */
 title = "Modification d'un courier type";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private typeMailService: TypeMailService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.typeMailId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let mailType = data.mailType;
   let action = data.action;
   this.typeMailService.update(mailType).subscribe(res => {
     this.router.navigate(['/mail-type/list']);
     this.alertService.success('Courier type modifié avec succès'); 
   });

 }

}
