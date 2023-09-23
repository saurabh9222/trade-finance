import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: any;
  serv: any;
  servPro: any;

  addServPro(data: any){
    this.servPro = data;
    console.log(this.servPro);
  }
  getServPro(){
    return this.servPro;
  }
  addServ(data: any){
    this.serv = data;
  }

  getServ(){
    return this.serv;
  }

  addUser(newUser: any) {
    this.users = newUser;
    console.log(this.users);
  }

  getUser() {
    return this.users;
  }
}
