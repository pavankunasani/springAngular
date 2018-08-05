import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  employee:Employee;
  
  constructor(private userReqService : UserRegistrationService){
	  
  }

  ngOnInit() {

    
  let employeeD = new Employee("test","test");
	   
	  
  this.userReqService.createEmployee(employeeD).subscribe(data=> {
   this.employee=data; 
  });

  }

}
