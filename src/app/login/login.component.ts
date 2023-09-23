
import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  buyer: any = "";
  username: any = "";
  password: any = "";
  users: any;

  constructor(private userService: UserServiceService, private router: Router) { }

  loginUser() {

    this.users = this.userService.getUser();
    this.userService.addServ(this.buyer);

    let foundUser =false;  
    for (const user of this.users) {
      console.log(user, "inner lloop")
        console.log(user.username, "ur lloop")
        if (user.username == this.username) {
          foundUser=true;
          break;
        }     
    }
    if (foundUser) {
      // User found, show an alert message
      window.alert("Login successful!");
      this.router.navigate(['/provide-service'])
    } else {
      // User not found, show an alert message
      window.alert("Login failed. Please check your credentials.");
    }

    this.username = "";
    this.password = "";


  }
}
