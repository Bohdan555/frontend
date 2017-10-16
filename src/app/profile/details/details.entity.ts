import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class DetailEntity{  
  @JsonProperty('photo',String)
  photo : string = undefined;

  @JsonProperty('forename',String)
  forename : string = undefined;

  @JsonProperty('surname',String)
  surname : string = undefined;

  @JsonProperty('middle_name',String)
  middle_name : string = undefined;

  @JsonProperty('living_place',String)
  living_place : string = undefined;

  @JsonProperty('rating',Number)
  rating : number = undefined;

  @JsonProperty('reviews',Number)
  reviews : number = undefined;
}
