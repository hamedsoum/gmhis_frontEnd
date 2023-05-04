import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceSubscriberService } from 'src/app/_services/insurance-subscriber.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-subscriber',
  templateUrl: './update-subscriber.component.html',
  styleUrls: ['./update-subscriber.component.css']
})
export class UpdateSubscriberComponent implements OnInit {
  
  /**
  * insurance id 
  */
 subscriberId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'un etablissement garant";
 

 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private subscriberService: InsuranceSubscriberService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.subscriberId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let subscriber = data.subscriber;
   let action = data.action;
   
   this.subscriberService.update(subscriber).subscribe(res => {
        this.router.navigate(['/insurance/list-subscriber']);
        this.alertService.success('Societaire modifié avec succès');
   });
  }

}
