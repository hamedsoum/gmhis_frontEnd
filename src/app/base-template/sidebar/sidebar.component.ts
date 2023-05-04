import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { can } from 'src/app/_utility/permission/can';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  /**
   * current User name 
   */
  userName: string;

  /**
   * permission service
   */
  permission: any;

  /**
   * define permissions
   */
  accessHomePage
  accessHomeModule: boolean;
  listPatient: boolean;
  listAdmission: boolean;
  listInvoice: boolean;
  listInwaitingRoom: boolean;
  listAppointment: boolean;
  accessUserModule: boolean;
  listUser: boolean;
  listRole: boolean;
  listPermission: boolean;


  userPermissions: [];

  constructor(
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userService.findByUsername(this.authService.getUsername()).subscribe(user => {
      this.userName = user['firstName'] + ' ' + user['lastName'];
     
       // set Permissions to component ressources
      this.accessUserModule = can(user, 'accessUserModule');
      this.accessHomePage = can(user, 'accessHomePage');
      this.accessHomeModule = can(user, 'accessHomeModule');
      this.listPatient = can(user, 'listPatient');
      this.listAdmission = can(user, 'listAdmission');
      this.listInvoice = can(user, 'listInvoice');
      this.listInwaitingRoom = can(user, 'listInwaitingRoom');
      this.listAppointment = can(user, 'listAppointment');
      this.listUser = can(user, 'listUser');
      this.listRole = can(user, 'listRole');
      this.listPermission = can(user, 'listPermission');
     

    });

  }

}
