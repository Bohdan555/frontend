import { Component, OnInit, ViewChild,ElementRef,SimpleChanges } from '@angular/core';
import  'rxjs/add/operator/map';
import {LoginApiConfig} from '../api_config';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Logger} from '../services/LogService';

@Component({
  selector: 'signing',
  templateUrl: './signing.component.html',
  styleUrls : ['./signinig.component.css']
})

export class SigningComponent implements OnInit {
  @ViewChild('stateOfPassword') stateOfPassword : ElementRef;
  constructor(private httpProvider : Http,private logger : Logger) {
  }
  ngOnInit() {
  }
  OnChangedPassword(passwordModelValue : string)
  {
    let regexp = /\w\d[A-Z]/;
    let passwordLength = passwordModelValue.length;
    let isPasswordMatchRegExp = regexp.test(passwordModelValue);
    if(passwordLength<5)
    {
      this.stateOfPassword.nativeElement.innerHTML = 'Too weak';
      this.stateOfPassword.nativeElement.style.color = 'red';
    }
    else if(passwordLength>7 && isPasswordMatchRegExp)
    {
      this.stateOfPassword.nativeElement.innerHTML = 'Strong';
      this.stateOfPassword.nativeElement.style.color = 'green';
    }
    else
    {
      this.stateOfPassword.nativeElement.innerHTML = 'Medium';
      this.stateOfPassword.nativeElement.style.color = 'yellow';
    }    
  }
  submitSignIn(email:string,password:string){
    let signInInfo : any = {
      email : email,
      password : password
    };
    let header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    this.logger.Debug('Data from signIn form is ready to be send');
    this.httpProvider.post(LoginApiConfig.SignInEndpoint,JSON.stringify(signInInfo),{
        headers: header
    }).subscribe(
      (data)=>this.logger.Info('Data from signIn from was sent'),
      err=>this.logger.Error('Error:data from signIn form was not posted'));
    };
    submitSignUp(email:string,password:string){
      let signUpInfo : any = {
        email : email,
        password : password
      };
      let header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
      this.logger.Debug('Data from signIn form is ready to be send');
      this.httpProvider.post(LoginApiConfig.SignUpEndpoint,JSON.stringify(signUpInfo),{
          headers: header
      }).subscribe(
        (data)=>this.logger.Info('Data from signIn from was sent'),
        err=>this.logger.Error('Data from signIn form was not posted'));
      }
};
