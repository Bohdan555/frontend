import {Injectable} from '@angular/core';
import  'rxjs/add/operator/map';
import {LoginApiConfig} from '../api_config';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoggerApi} from '../configs/api_config';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class Logger{
  private header : Headers;
  private sessionId : string;
  constructor(private httpProvider : Http, private cookieService : CookieService){
    this.cookieService = new CookieService();
    this.header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  }
  Debug(message : string){
    let logToSend = JSON.stringify({messagetype:'Debug',message:message,time: new Date().getTime()});
    this.httpProvider.post(LoggerApi.LoggerApiEndpoint,logToSend,{
        headers: this.header
    }).subscribe(data=>console.log('log was sent'),err=>console.log(err));
    };
  Info(message : string){
    let logToSend = JSON.stringify({messagetype:'Info',message:message,time: new Date().getTime()});
    this.httpProvider.post(LoggerApi.LoggerApiEndpoint,logToSend,{
        headers: this.header
    }).subscribe(data=>console.log('log was sent'),err=>console.log(err));
    };
  Warn(message : string){
    let logToSend = JSON.stringify({messagetype:'Warn',session:this.sessionId,message:message,time: new Date().getTime()});
    this.httpProvider.post(LoggerApi.LoggerApiEndpoint,logToSend,{
        headers: this.header
    }).subscribe(data=>console.log('log was sent'),err=>console.log(err));
  };
  Error(message : string){
    let logToSend = JSON.stringify({messagetype:'Error',message:message,time: new Date().getTime()});
    this.httpProvider.post(LoggerApi.LoggerApiEndpoint,logToSend,{
        headers: this.header
    }).subscribe(data=>console.log('log was sent'),err=>console.log(err));
  }
  }
