import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceSubscriberService } from 'src/app/_services/insurance-subscriber.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  
  
  /**
   * title to display
   */
  title = 'Ajouter un etablissement garant';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private subscriberService: InsuranceSubscriberService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let subscriber = data.subscriber;
    let action = data.action;

    this.subscriberService.save(subscriber).subscribe(subscriber => {

      switch (action) {
        case 'save':
          this.router.navigate(['/insurance/list-subscriber']);
          this.alertService.success('Societaire ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/insurance/add-subscriber']);
          this.alertService.success('Societaire ajouté avec succès')

          break;

        default: this.router.navigate(['/insurance/list-subscriber']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }
}
