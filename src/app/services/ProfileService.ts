import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/src/Subject';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/take';
import { Http,Response,Headers } from '@angular/http';
import { ProfileApiConfig } from '../configs/api_config';
import { ServiceConfig } from '../configs/service_config';

@Injectable()
export class ProfileService{
 private header : Headers;
 constructor(private httpProvider:Http)
   {
    this.header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
   }
   Get(path : string, entity : any){
     return this.httpProvider.get(path,{headers: this.header }).map(data=>this.mapper(entity,data.json())).retryWhen(error => error.delay(ServiceConfig.retryPeriod).take(ServiceConfig.retryAmount));
   }
   Post(){

   }
   Put(){

   }
   Delete(){

   }
  private mapper(entity,data) : any{
    let entityProperties : string[] = Object.getOwnPropertyNames(entity);
    let dataProperties : string[] = Object.getOwnPropertyNames(data);
    console.log(entityProperties);
    console.log(dataProperties);
    if(entityProperties.every((element,index)=>data.find(element)) && dataProperties.length == entityProperties.length){

      for(let key in data)
      {
        entity.key = data[key];
        console.log(key);
      }
      return entity;
    }
    else{
      throw Error('incorrect data');
    }
   }
 };
