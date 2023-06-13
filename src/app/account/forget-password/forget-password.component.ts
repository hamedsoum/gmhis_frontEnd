import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthentificationService } from 'src/app/_services/authentification.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  providers: [MessageService],
})
export class ForgetPasswordComponent implements OnInit {

 
  /* 
    login form
  */
    forgotPasswordForm!: FormGroup;

    showPassword = true;
    mailUser!: string;
  
    /* 
     handle the spinner
   */
    onLoading!: boolean;
    showSuccesMessage: boolean = false;
  
    readOnly = true;
    formSubmitted!: boolean;
  
    constructor(
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
      this.initForm();
    }
  
    /*
    init form 
    */
  
    initForm() {
      this.forgotPasswordForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }
  
    get email() {
      return this.forgotPasswordForm.get('email');
    }

    onforgotPassword(){
      this.onLoading = true;
      this.formSubmitted = true;
      const email = this.forgotPasswordForm.value;
      
      if(this.forgotPasswordForm.valid){
        this.authenticationService.resetPassword(email).subscribe(
          (res) => {
            this.onLoading = false;
            this.mailUser = this.forgotPasswordForm.get('email')?.value;
            this.showSuccesMessage = true;
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
