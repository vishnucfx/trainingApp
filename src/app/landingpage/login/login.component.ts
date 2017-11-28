import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationService} from "../../validation.service";
import {FacebookService, InitParams, LoginResponse} from "ngx-facebook";
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;


  constructor(private formBuilder: FormBuilder , private fb: FacebookService , private router: Router) {

    let initParams: InitParams = {
      appId: '1558880917531164',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }


  ngOnInit() {

   this.userForm = this.formBuilder.group({

      email : [ '', [Validators.required, ValidationService.emailValidator]],
     password: [ '',[Validators.required, ValidationService.passwordValidator]],

    });
  }

  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => this.router.navigate(['/homepage']))
      .catch((error: any) => console.error(error));
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {

      alert('Password: ${this.userForm.value.password} Email: ${this.userForm.value.email}');

    }
  }

}

