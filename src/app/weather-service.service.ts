import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {


	  constructor(private http: HttpClient) { }
	
	getMumbai() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=ec0912a2f1b9cacb9846f4ad753d4803')
  }
}
