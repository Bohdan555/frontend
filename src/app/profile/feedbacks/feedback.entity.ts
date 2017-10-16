import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
class Marks {
  @JsonProperty('characteristic',String)
  characteristic : string = undefined;

  @JsonProperty('value',Number)
  value: number = undefined;
}

@JsonObject
export class FeedbackEntity{
  @JsonProperty('sender',String)
  sender : string = undefined;

  @JsonProperty('marks',[Marks])
  marks : Marks[] = undefined;

  @JsonProperty('text',String)
  text : string = undefined;

  @JsonProperty('surname',String)
  surname: string = undefined;

  @JsonProperty('forename',String)
  forename: string = undefined;

  @JsonProperty('photo',String)
  photo: string = undefined;
}
