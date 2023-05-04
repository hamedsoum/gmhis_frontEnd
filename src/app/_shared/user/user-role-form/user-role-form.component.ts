import { Component, Input, OnInit } from '@angular/core';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.css']
})
export class UserRoleFormComponent implements OnInit {

  /**
   * list of roles
   */
  roles: any;

  /**
   * user roles
   */
  userRoles = [];

  /**
   * parent component input
   */
  @Input()
  userId: number

  /**
   * user object
   */
  user: object;

  constructor(
    private roleService: RoleService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.roleService.findActive().subscribe(res => {
      this.roles = res;
    });

    if (this.userId) {
      this.userService.findById(this.userId).subscribe(res => {
        this.userRoles = res['roles'].map(({ name }) => name);
      })
    }

  }


  /**
   * insert or remove a role from the prescribed Drugs array
   * @param selectedRole 
   */
  public getSelectedRoles(selectedRole) {

    if (this.userRoles.includes(selectedRole)) {

      let index = this.userRoles.indexOf(selectedRole);
      this.userRoles.splice(index, 1);

    } else {

      this.userRoles.push(selectedRole);
    }
  }

}
