import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidator } from './username.validator';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  data: any = {};
  dataArray: any = [];
 submitted = false;

  form= new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
      ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      // UserValidator.cannotContainSpace 
    ]),
    email: new FormControl('',[
      Validators.required, 
      Validators.pattern("^[a-z]+@gmail.com") 
    ]),
    phnNumber:new FormControl('',[
      Validators.required,
      Validators.minLength(10)
     ]),
    gender:new FormControl('',[
      Validators.required 
    ])
  });
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  get Email(){
	return this.form.get('email');
  }
  get phn(){
	return this.form.get('phnNumber');
  }
  get gender(){
	return this.form.get('gender');
  }

isFormValid(isCheck) {
  if(isCheck.target.checked) {
    this.form.get('username').setValidators([]); // or clearValidators()
    this.form.get('username').updateValueAndValidity();

    this.form.get('email').setValidators([]); 
    this.form.get('email').updateValueAndValidity();

    this.form.get('gender').setValidators([]); 
    this.form.get('gender').updateValueAndValidity();

    this.form.get('phnNumber').setValidators([]); 
    this.form.get('phnNumber').updateValueAndValidity();

    this.form.get('password').setValidators([]); 
    this.form.get('password').updateValueAndValidity();
  }
  else{
    this.form.get('username').setValidators([
      Validators.required,
      Validators.minLength(4)
    ]); // or clearValidators()
    this.form.get('username').updateValueAndValidity();

    this.form.get('email').setValidators([
       Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]); 
    this.form.get('email').updateValueAndValidity();

    this.form.get('gender').setValidators([
      Validators.required 
    ]); 
    this.form.get('gender').updateValueAndValidity();

    this.form.get('phnNumber').setValidators([
      Validators.required
    ]); 
    this.form.get('phnNumber').updateValueAndValidity();

    this.form.get('password').setValidators([
       Validators.required,
      Validators.minLength(4),
    ]); 
    this.form.get('password').updateValueAndValidity();
   
  }
}

submitForm(form) {
    
      this.dataArray.push(this.data);
      this.data = {};
      console.log(this.data);
      
    
  }
    getData(index) {
    console.log(index);
    this.data = this.dataArray[index];
    
  }

  delete(index) {
    this.dataArray.splice(index, 1);
  }
}


