import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/_models/user';
import { AuthentificationService } from 'src/app/_services/authentification.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  providers: [MessageService],
})
export class PasswordResetComponent implements OnInit {

  /* 
    login form
  */
  resetPasswordForm!: FormGroup;
  showPassword = true;
  statusPassword: string = "";
  controlPwd!: boolean;
  /* 
   handle the spinner
 */
  onLoading!: boolean;

  readOnly = true;
  formSubmitted!: boolean;
  codeUrl: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private authenticationService: AuthentificationService
  ) { }

  // Unsubscribe when the component dies
  ngOnDestroy() {
  }

  ngOnInit(): void {
    this.codeUrl = this.route.snapshot.paramMap.get('code');
    this.initForm();
  }

  initForm() {
    this.resetPasswordForm = new FormGroup({
      code: new FormControl(null),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }


  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  verifyPassword(){
    const pwd1 = this.resetPasswordForm.get('newPassword')?.value;
    const pwd2 = this.resetPasswordForm.get('confirmPassword')?.value;

    if(pwd1 === pwd2){
      this.statusPassword = "Felicitiion, mot de passe conforme :)";
      this.controlPwd = true;
    } else {
      this.statusPassword = "Veuillez saisir des mots de passe conforme!";
      this.controlPwd = false;
    }
  }

  onResetPassword(){
    this.onLoading = true;
    this.formSubmitted = true;
    this.resetPasswordForm.get('code')?.setValue(this.codeUrl);
    const password = this.resetPasswordForm.value;
    
    if(this.resetPasswordForm.valid){
      this.authenticationService.changePassword(password).subscribe(
        (res) => {
          this.onLoading = false;
          this.resetPasswordForm.reset();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Veuillez consulter votre boite de messagerie',
          });
        },
        (err: HttpErrorResponse) => {
          this.onLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'erreur,',
            detail: err.error.message,
          });
        }
      )
    } else {
      this.onLoading = false;
      this.messageService.add({severity:'error', summary:'Formulaire invalide,', detail:'tous les champs marqués par (*) sont obligatoires'});
    }
  }

}
