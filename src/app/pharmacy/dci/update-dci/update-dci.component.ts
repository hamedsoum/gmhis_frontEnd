import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DciService } from 'src/app/_services/dci.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-dci',
  templateUrl: './update-dci.component.html',
  styleUrls: ['./update-dci.component.css']
})
export class UpdateDciComponent implements OnInit {

  /**
  * object id 
  */
  dciId: number;

  /**
   * title to display
   */
  title = "Modification d'une DCI";


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dciService: DciService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dciId = params.id;
    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let dci = data.dci;
    let action = data.action;
    this.dciService.update(dci).subscribe(res => {
      this.router.navigate(['/pharmacy/dci-list']);
      this.alertService.success('DCI modifiée avec succès');
    });

  }

}
