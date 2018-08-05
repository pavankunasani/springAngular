import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {Observable} from 'rxjs';

import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

   private apiUrl = 'http://localhost:9595';

  constructor(public http: HttpClient) {
 }
  
  
  createEmployee(employee:Employee):Observable<any>{
	 //  let empHeaders = new Headers({ 'Content-Type': 'application/json' });
	   console.log("service");
	   console.log(JSON.stringify(employee));
	    

		return this.http.get(this.apiUrl +'/'+'getNamee');
	
		
  }
  
   updateEmployee(employee:Employee):Observable<any>{
	 //  let empHeaders = new Headers({ 'Content-Type': 'application/json' });
	   console.log("service");
	   console.log(JSON.stringify(employee));
	    
	   return this.http.post(this.apiUrl +'/'+'saveEmployee', employee);
	
	
		
  }
  
}
