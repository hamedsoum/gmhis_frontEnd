import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  /***
   * page title
   */
  title = 'Nouveau rôle';
  
  constructor(
    private router : Router,
    private roleService : RoleService,
    private alertService : AlertService
    ) { }

  ngOnInit(): void { }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let role = data.role;
    let action = data.action;
     
    this.roleService.save(role).subscribe(res => {
    
      switch (action) {
        case 'save':
          this.router.navigate(['/role/list']);
          this.alertService.success('Rôle ajouté avec succès')
          break;

        case 'save_and_new':
          this.router.navigate(['/role/add']);
          this.alertService.success('Rôle ajouté avec succès')

          break;

        default: this.router.navigate(['/role/list']);
        this.alertService.error('Ajout annulée')

          break;
      }
    },
    error => {
      this.alertService.error(error);
    });

  }
}
