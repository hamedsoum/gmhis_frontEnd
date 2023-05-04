import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Modifier un utilisateur';

  /**
   * user id
   */
  userId: number;

  constructor(
    private activatedRoute : ActivatedRoute,
    private userService : UserService,
    private router: Router,
    private alertService: AlertService

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.userId = params.id;
   })
  }

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let user = data.user;
    if(user['password']==''){
      user['password']= null;
      // delete user['repassword'];
    } 
    
    this.userService.update(user).subscribe(user => {
      if(user){
        this.router.navigate(['/user/list']);
        this.alertService.success('Utilisateur modifié avec succès')
      }
    },
    error => {
      this.alertService.error(error)
    },
    () => {});

  }

}
