import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  successOnce: boolean = false;

  constructor(
    private router : Router, 
    builder : FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = builder.group({
      username: new FormControl(null, [Validators.required]),
      pswd: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      if( this.loginService.login( this.loginForm.value) ){
        this.router.navigateByUrl("/recap-base");
      }
      else {
        alert("credentials incorrects");
      }
    }
  }

  isLogged(){
    return this.loginService.isAuthenticated();
  }
}
