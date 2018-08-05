import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  employee:Employee;
 
  constructor(private userReqService : UserRegistrationService){
	  
  }

  ngOnInit() {
  }

    onClickSubmit(regData){
	  
	   let employee = new Employee(regData.firstname,regData.lastname);
	   
	  
	  this.userReqService.updateEmployee(employee).subscribe(data=> {
		 this.employee=data; 
	
	  });
	 
  }
  
}
