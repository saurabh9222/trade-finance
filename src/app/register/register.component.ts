

import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  buyer: any = "";
  email: any = "";
  username: any = "";
  password: any = "";
  users: any = {};
  finalarr: any[] = [];
  
  constructor(private userService: UserServiceService) {}
  registerUser() {
    // Create a new user object
    this.users = {
      organizationType: this.buyer,
      email: this.email,
      username: this.username,
      password: this.password
      // You can add more properties as needed
    };

    this.finalarr.push(this.users);
    this.userService.addUser(this.finalarr);

  }
}


