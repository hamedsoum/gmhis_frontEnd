import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DcuService } from 'src/app/_services/dcu.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-dcu',
  templateUrl: './update-dcu.component.html',
  styleUrls: ['./update-dcu.component.css']
})
export class UpdateDcuComponent implements OnInit {

/**
  * object id 
  */
 dcuId: number;

 /**
  * title to display
  */
 title = "Modification d'une unité de conditionement";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private dcuService: DcuService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.dcuId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let dcu = data.dcu;
   let action = data.action;
   this.dcuService.update(dcu).subscribe(res => {
     this.router.navigate(['/pharmacy/dcu-list']);
     this.alertService.success('DCu modifiée avec succès'); 
   });

 }
}
