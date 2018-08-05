import { Component,OnInit } from '@angular/core';
import {UserRegistrationService} from './user-registration.service';
import {Employee} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'springAngular';
  employee:Employee;
  
  constructor(private userReqService : UserRegistrationService){
	  
  }
  
  ngOnInit(){
	 
  let employeeD = new Employee("test","test");
	   
	  
	  this.userReqService.createEmployee(employeeD).subscribe(data=> {
		 this.employee=data; 
	  });
		 
	  
  }
  

}
