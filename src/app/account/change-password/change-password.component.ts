import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthentificationService } from 'src/app/_services/authentification.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [MessageService],
})
export class ChangePasswordComponent implements OnInit {

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
    username: any;
  
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
  
      // if (this.authenticationService.isLoggedIn()) {
      //   this.router.navigateByUrl('/home');
      // } else {
      //   this.router.navigateByUrl('login');
      // }
      this.username = this.route.snapshot.paramMap.get('username');
      console.log(this.username);
      
      this.initForm();
    }
  
    /*
    init form 
    */
  
    initForm() {
      this.resetPasswordForm = new FormGroup({
        username: new FormControl(null),
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
      this.resetPasswordForm.get('username')?.setValue(this.username);
      const password = this.resetPasswordForm.value;
      
      if(this.resetPasswordForm.valid){
        this.authenticationService.firstLoginChangePassword(password).subscribe(
          (res:any) => {
            console.log(res);
            this.onLoading = false;
            this.resetPasswordForm.reset();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Mot de passe changé avec succès',
            });

            this.router.navigate(['/account/login']);
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
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
