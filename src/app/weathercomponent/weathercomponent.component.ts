import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-weathercomponent',
  templateUrl: './weathercomponent.component.html',
  styleUrls: ['./weathercomponent.component.scss']
})
export class WeathercomponentComponent implements OnInit {
 weatherd:object;
  constructor(private router: Router,
							private weather: WeatherServiceService) { }

  ngOnInit() {
		this.weather.getMumbai().subscribe(data => {
			this.weatherd=data;
			console.log(this.weatherd);
		});
  }
	
//	  @Output() handleclick = new EventEmitter();
//    handleclicked() {
//        console.log('hey I am  clicked in child');
//			this.handleclick.emit("swap");
//    }

}
