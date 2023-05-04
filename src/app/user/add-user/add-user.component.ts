import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  /**
   * title to display
   */
  title = 'Nouvel utilisateur';

  constructor(
    private router : Router,
    private alertService : AlertService,
    private userService : UserService ) { }

  ngOnInit(): void {}

  /**
   * add a new object
   * @param data object
   * 
   */
  save(data) {

    let user = data.user;
     
    this.userService.save(user).subscribe(user => {
      if(user){
        this.router.navigate(['/user/list']);
        this.alertService.success('Utilisateur ajouté avec succès')
      }
        
    },
    error => {
      this.alertService.error(error)
    },
    () => {});

  }
}
