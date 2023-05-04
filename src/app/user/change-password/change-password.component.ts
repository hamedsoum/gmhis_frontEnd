import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertService } from 'src/app/_utility/alert/alert.service';
import { invalidformControls } from 'src/app/_utility/form/invalid-form-controls';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  /**
   * form groupe
   */
  form: FormGroup;

  /**
   *  invalides form controls
   */
  invalidFormControls: any;

  /**
   * error mesage
   */
  errorMessage: string;

  /**
   * user id
   */
  userId: number;

  constructor( 
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
    })
  }

  /**
   * init form
   */
  initForm() {
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    })
  }

  /**
   * change the password
   */
  save() {
    this.alertService.clear();
    this.invalidFormControls = invalidformControls(this.form)

    if (this.form.valid) {
      this.userService.findById(this.userId).subscribe(user => {
        if (user) {
          let data = this.form.value;
          data['userId'] = user.id;

          this.userService.changePassword(data).subscribe(res => {
            Swal.fire(
              'Changé!',
              'Votre mot de passe à été reinitialisé avec succès. veillez vous reconnecté pour continuer!',
              'success'
            );
            this.authService.logout();
          },
            error => {
              this.errorMessage = error;
            })
        }

      })
    } else {
      this.errorMessage = 'Formulaire invalid';
    }

  }

  /**
   * 
   */
  logout(){
   this.authService.logout();
  }

}
