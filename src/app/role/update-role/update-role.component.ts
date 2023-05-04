import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  /***
   * page title
   */
  title = 'Modifier un rôle';

  /**
   * object id 
   */
  roleId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.roleId = params.id;

    })
  }

  /**
   * update existing object
   * @param data object
   */
  save(data) {

    let object = data.role;

    this.roleService.update(object).subscribe(role => {
      this.router.navigate(['/role/list']);
      this.alertService.success('Rôle modifié avec succès');
    })

  }

}
