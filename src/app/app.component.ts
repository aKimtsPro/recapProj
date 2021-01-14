import { Component } from '@angular/core';
import {Voiture} from './model/Voiture'
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recapProj';
  bootstrap_class = 'display-1 col-6';

  constructor(private loginService : LoginService){
  }

  isLogged(){
    return this.loginService.isAuthenticated()
  }

  disconnect(){
    console.log("test")
    this.loginService.logout();
  }
}
