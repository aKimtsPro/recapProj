import { Injectable } from '@angular/core';
import { UserForm } from 'src/app/model/UserForm';
import { UserDetails } from 'src/app/model/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(form: UserForm): boolean {
    if(form.username === 'user' && form.pswd === 'root'){
      const details: UserDetails = {
        username: form.username,
        loggedAt: new Date()
      };
      sessionStorage.setItem("user-details", JSON.stringify(details));
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem("user-details") !== null;
  }

  logout(){
    sessionStorage.removeItem("user-details");
  }
}
