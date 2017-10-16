import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class HobbyEntity{
  @JsonProperty('name',String)
  name : string = undefined;

  @JsonProperty('image',String)
  image : string = undefined;
}
