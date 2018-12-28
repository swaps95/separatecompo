import { Component, OnInit , EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  page:number;
	users:object;
	collection=[];
	flag:boolean;
	count:number;
	p: number = 1;
	mock: any;
  constructor(private data: DataService,
							private router: Router) { }

  ngOnInit() { 
	  this.data.getmockdata().subscribe(data => {
			this.mock=data;
			console.log(this.mock[0])
		})
		
		
	}
	
//	  @Output() firstclick = new EventEmitter();
	firstclick(e){
		this.data.getUsers().subscribe(data => {
       this.users = data;
			 this.page=this.users.page;
			for(const prop in this.users.data){
				this.collection.push(this.users.data[prop]);
				console.log(this.users.data[prop]);
				this.count = Object.keys(this.collection).length;
//				e.target.removeEventListener(e.type, arguments.callee);
//				console.log(this.count);
				this.flag=true;
			}
			 
      }
    );
	}
	capturecount(){
//		this.count = Object.keys(this.users.data).length;
//		console.log(this.count);
		this.router.navigate(['weather']);
	}
//	captureClick(e){
//		if(this.flag==true){
//			e.target.removeEventListener(e.type, arguments.callee);
//		}
//	}
	
 
	
}
