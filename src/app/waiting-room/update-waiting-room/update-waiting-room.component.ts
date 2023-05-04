import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-waiting-room',
  templateUrl: './update-waiting-room.component.html',
  styleUrls: ['./update-waiting-room.component.css']
})
export class UpdateWaitingRoomComponent implements OnInit {

 
 /**
  * waiting room id 
  */
 waitingRoomId: number;

 /**
  * title to display
  */
 title = "Modification d'une salle d\'attente";


 constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private waitingRoomService: WaitingRoomService,
   private alertService: AlertService
 ) { }

 ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
     this.waitingRoomId = params.id;
   })
 }

 /**
  * update existing object
  * @param data object
  */
 save(data) {

   let waitingRoom = data.waitingRoom;
   let action = data.action;
   this.waitingRoomService.update(waitingRoom).subscribe(res => {
     this.router.navigate(['/waiting-room/list']);
     this.alertService.success('Salle d\'attente modifiée avec succès'); 
   });

 }

}
