import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent {
  formData: any = {
    lcId: '',
    expiryDate: '',
    buyer: '',
    bank: '',
    seller: '',
    amount: null
  };
  servPro: any;
  flag: any = "false";
  a="Rahul";
  code:any;
  message:any;
 
  getRequestLc(){
    console.log(this.flag);
    
    this.flag="true";
    this.code = '200';
    this.message= 'LC requested successsfully';
  }
  getIssueLc(){
    this.flag="true";
    this.code = '200';
    this.message= 'LC issued successsfully';
  }
  getAcceptLc(){
    this.flag="true";
    this.code = '200';
    this.message= 'LC accepted successsfully';
  }
  getLcDetails(){
    this.flag="true";
    this.formData.lcId = "1";
    this.formData.expiryDate ="10-10-2033";
    this.formData.buyer ="tempbuyer";
    this.formData.bank ="tempbank";
    this.formData.seller ="tempseller";
    this.formData.amount ="tempamount";
  }
  getLcHistory(){

  }
  onSubmit(formValue: any) {
    // Handle form submission here, e.g., send data to a service
    console.log(formValue);
  }
  constructor(private userserv: UserServiceService){}

  ngOnInit(){
    console.log(this.flag);
    
    this.servPro = this.userserv.getServPro();
  }

}





