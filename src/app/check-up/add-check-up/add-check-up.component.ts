import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUpService } from 'src/app/_services/check-up.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-check-up',
  templateUrl: './add-check-up.component.html',
  styleUrls: ['./add-check-up.component.css']
})
export class AddCheckUpComponent implements OnInit {

  /**
    * title to display
    */
  title = 'Creer un Bilan type';

  constructor(
    private router: Router,
    private alertService: AlertService,
    private checkUpService: CheckUpService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let checkUp = data.checkUp;
    let action = data.action;

    this.checkUpService.save(checkUp).subscribe(checkUp => {

      switch (action) {
        case 'save':
          this.router.navigate(['/check-up/list']);
          this.alertService.success('Bilan creer avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/check-up/add']);
          this.alertService.success('Bilan creer avec succès')

          break;

        default: this.router.navigate(['/check-up/list']);
          this.alertService.error('Creation annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });
  }
}
