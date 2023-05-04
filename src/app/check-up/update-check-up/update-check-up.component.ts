import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckUpService } from 'src/app/_services/check-up.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-check-up',
  templateUrl: './update-check-up.component.html',
  styleUrls: ['./update-check-up.component.css']
})
export class UpdateCheckUpComponent implements OnInit {

/**
  * object id 
  */
 checkUpId: number;

 /**
  * title to display
  */
 title = "Modification d'un bilan médical";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private checkUpService: CheckUpService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.checkUpId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let checkUp = data.checkUp;
   let action = data.action;
   this.checkUpService.update(checkUp).subscribe(res => {
     this.router.navigate(['/check-up/list']);
     this.alertService.success('Bilan modifié avec succès'); 
   });

 }
}
