import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-waiting-room',
  templateUrl: './add-waiting-room.component.html',
  styleUrls: ['./add-waiting-room.component.css']
})
export class AddWaitingRoomComponent implements OnInit {

  /**
   * title to display
   */
  title = "Ajouter une salle d'attente";

  constructor(
    private router: Router,
    private alertService: AlertService,
    private waitingRoomService: WaitingRoomService
  ) { }

  ngOnInit(): void {

  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let waitingRoom = data.waitingRoom;
    let action = data.action;
     
    this.waitingRoomService.save(waitingRoom).subscribe(res => {

      switch (action) {
        case 'save':
          this.router.navigate(['/waiting-room/list']);
          this.alertService.success('Salle d\'attente ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/waiting-room/add']);
          this.alertService.success('Salle d\'attente ajouté avec succès')

          break;

        default: this.router.navigate(['/waiting-room/list']);
          this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }

}
