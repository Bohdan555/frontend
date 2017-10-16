import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/src/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/take';
import { Http,Response,Headers } from '@angular/http';
import { ProfileApiConfig } from '../configs/api_config';
import { BaseApi } from '../configs/api_config';
import { ServiceConfig } from '../configs/service_config';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";

@Injectable()
export class ProfileService{
 private header : Headers;
 private jsonConverter : JsonConvert;
 constructor(private httpProvider:Http)
   {
    this.header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    this.jsonConverter = new JsonConvert();
    this.jsonConverter.ignorePrimitiveChecks = false;
    this.jsonConverter.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
   }
   Get(path : string, objectEntity : {new () : any}){
     return this.httpProvider.get(path,{headers: this.header })
     .map(data => {
       console.log(data);
        try
        {
          let deserializedData = this.jsonConverter.deserialize(data.json(),objectEntity);
          return deserializedData;
       }
     catch(e)
     {
       console.log((<Error>e));
     }
   })
     .retryWhen(error => error.delay(ServiceConfig.retryPeriod)
     .take(ServiceConfig.retryAmount));
   }

   Post(){

   }
   Put(){

   }
   Delete(){

   }
 };
