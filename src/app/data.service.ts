import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
	
	getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
	getmockdata(){
		return this.http.get('http://localhost:3000/employees')
	}
//	updatedata(){
//		return this.http.put('http://localhost:3000/employees')
//	}
}
