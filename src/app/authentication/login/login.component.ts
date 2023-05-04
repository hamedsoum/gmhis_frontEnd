import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router} from '@angular/router';
import { AppCookieService } from "../../_services/app-cookie.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * login form
   */
  loginForm : FormGroup;

  /**
   * login error message
   */
  loginErrorMessage ='';

  /**
   * handle the spinner
   */
  public loading : boolean;
 
  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private cookieService: AppCookieService
    
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  
  /**
   * init form
   */
  initForm(){
    this.loginForm = new FormGroup({     
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    });
  }
  

  /**
   * 
   */
  loginProcess(){
 
    this.loading=true;

    if (this.loginForm.valid) {
      
      this.authService.login(this.loginForm.value).subscribe(
      
        response=>{
          this.loading = false;
          
          if(response){

            if( response['status']==200 && response['statusText'] == "OK"){
           
              let autorization = response.headers.get('Authorization');
           
              if(autorization.includes('Bearer ')) {
              let token = autorization.substring(7);
              this.cookieService.set('token', token);
              this.cookieService.set('username', btoa(this.loginForm.get("username").value));
              this.router.navigateByUrl('/home');
            }
            }
          }
          
         },
        error => {
          this.loading = false;
          this.loginErrorMessage = error;
          this.router.navigate(['/login']);
        },
        () => { })
    }
  } 
}
