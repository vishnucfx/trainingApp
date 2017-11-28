import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationService} from "../../validation.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  RegisterForm:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({

      email : [ '', [Validators.required, ValidationService.emailValidator]],
      password: [ '',[Validators.required, ValidationService.passwordValidator]],

    });
  }

  saveUser() {
    if (this.RegisterForm.dirty && this.RegisterForm.valid) {
      alert('Password: ${this.RegisterForm.value.password} Email: ${this.RegisterForm.value.email}');
    }
  }
}
