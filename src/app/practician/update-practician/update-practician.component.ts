import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticianService } from 'src/app/_services/practician.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-practician',
  templateUrl: './update-practician.component.html',
  styleUrls: ['./update-practician.component.css']
})
export class UpdatePracticianComponent implements OnInit {

  /**
  * object id 
  */
 practicianId :  number;
  
 /**
  * title to display
  */
 title = "Modification d'un pratician";
 
 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private practicianService: PracticianService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      this.practicianId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {
  
   let practician = data.practician;
   let action = data.action;
   
   this.practicianService.update(practician).subscribe(res => {
        this.router.navigate(['/practician/list']);
        this.alertService.success('Pratician modifié avec succès')
   });
 }

}
