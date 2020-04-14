import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidator } from './username.validator';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form= new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      UserValidator.cannotContainSpace]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      UserValidator.cannotContainSpace 
    ])
  });
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}

