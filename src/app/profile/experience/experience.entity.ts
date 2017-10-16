import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
class Location{
  @JsonProperty('city',String)
  city : string = undefined;

  @JsonProperty('country',String)
  country : string = undefined;
}

@JsonObject
class TimeRange{
  @JsonProperty('timestart',Number)
  timestart : number = undefined;

  @JsonProperty('timefinish',Number)
  timefinish : number = undefined;
}

@JsonObject
class Company{
  @JsonProperty('name',String)
  name : string = undefined;

  @JsonProperty('utl',String)
  utl : string = undefined;

  @JsonProperty('location',Location)
  location : Location = undefined;

  @JsonProperty('photo',String)
  photo : string = undefined;

}

@JsonObject
export class ExperienceEntity{
  @JsonProperty('description',String)
  description : string = undefined;

  @JsonProperty('company',Company)
  company : Company = undefined;

  @JsonProperty('position',String)
  position : string = undefined;

  @JsonProperty('timerange',TimeRange)
  timerange : TimeRange = undefined;
}
