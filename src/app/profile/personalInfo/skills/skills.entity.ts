import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class SkillEntity{
  @JsonProperty('name',String)
  name : string = undefined;

  @JsonProperty('image',String)
  image : string = undefined;
}
