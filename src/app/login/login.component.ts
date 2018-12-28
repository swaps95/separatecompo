import { Component, OnInit } from '@angular/core';
import { ILogin } from '../login';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder,
							private router: Router,
							) {
		 
	}

  ngOnInit() {
		this.registerForm = this.formBuilder.group({
       firstName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email,]],
       password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
	
	 get f() { return this.registerForm.controls; }
	
	onSubmit() {
        this.submitted = true;
//        console.log(this.registerForm.value.firstName);
//		    localStorage.setItem('Firstname', this.registerForm.value.firstName);
//		 if(localStorage.getItem('Firstname') == "sfsf"){
//			 
//		 }
		 console.log(localStorage.getItem('Firstname'));
//		rg@edsaf
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.router.navigate(['dashboard']);
    }

}
