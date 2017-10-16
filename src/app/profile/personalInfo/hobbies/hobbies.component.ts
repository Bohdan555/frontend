import {Component} from '@angular/core';
import {HobbyEntity} from './hobbies.entity';
import { ProfileService } from '../../../services/ProfileService';
import { ProfileApiConfig } from '../../../configs/api_config';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls : ['./hobbies.component.css']
})
export class HobbiesComponent{
  private hobbies : HobbyEntity[];
  constructor(private ApiProvider : ProfileService){
    this.ApiProvider.Get(ProfileApiConfig.HobbiesEndPoint, HobbyEntity)
    .subscribe(hobbies=>this.hobbies = hobbies);
  }
}
