import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NGValidators } from 'ng-validators';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { WeathercomponentComponent } from './weathercomponent/weathercomponent.component'; 
import { NgxWebstorageModule } from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    NavBarComponent,
    WeathercomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
		NgxPaginationModule,
	  NgxWebstorageModule.forRoot()

		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
