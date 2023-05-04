import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitOfMeasureService } from 'src/app/_services/unit-of-measure.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-unit-of-measure',
  templateUrl: './update-unit-of-measure.component.html',
  styleUrls: ['./update-unit-of-measure.component.css']
})
export class UpdateUnitOfMeasureComponent implements OnInit {

  /**
  * unit nof measure id 
  */
 uomId: number;

 /**
  * title to display
  */
 title = "Modification d'une unité de mesure";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private uomService: UnitOfMeasureService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.uomId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let uom = data.uom;
   let action = data.action;
   this.uomService.update(uom).subscribe(res => {
     this.router.navigate(['/uom/list']);
     this.alertService.success('Unité de mesure modifiée avec succès'); 
   });

 }

}
