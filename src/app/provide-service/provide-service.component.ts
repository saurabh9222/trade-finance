import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-provide-service',
  templateUrl: './provide-service.component.html',
  styleUrls: ['./provide-service.component.css']
})
export class ProvideServiceComponent {
  providedServise: any; 
  service: any;

  constructor(private userserv: UserServiceService){}

  ngOnInit(){
    this.service = this.userserv.getServ();
  }
 

  rout(){
    this.userserv.addServPro(this.providedServise);
  }

}

