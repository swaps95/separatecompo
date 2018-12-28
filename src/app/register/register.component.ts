import { Component, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  attribute:any;
  constructor(private localSt:LocalStorageService) { }

  ngOnInit() {
		this.localSt.observe('boundValue').subscribe((value) => console.log('boundValue', value));
//		  let isAvailable = this.localSt.isStorageAvailable();
//      console.log(isAvailable);
  }
	
	 @LocalStorage() public boundValue;
	  observeVal(){
		 this.localSt.store('boundValue', "3");
	  }
	
    clearItem() {
      this.localSt.clear('boundValue');
      //this.storage.clear(); //clear all the managed storage items
    }
	retrieveVal(){
		return this.attribute = this.localSt.retrieve('boundValue');
	}

}
