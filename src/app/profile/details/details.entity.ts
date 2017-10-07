import { Injectable } from '@angular/core';
@Injectable()
export class DetailsEntity{
  photo : string = '';  
  forename : string = '';
  surname : string = '';
  middle_name : string = '';
  living_place : string = '';
  rating : number = 0;
  reviews : number = 0;
}
