import {Component} from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
import { ProfileApiConfig } from '../../configs/api_config';
import { DetailEntity } from './details.entity';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls : ['./details.component.css']
})
export class DetailsComponent{
  private user : DetailEntity;
  constructor(private ApiProvider : ProfileService){
    this.ApiProvider.Get(ProfileApiConfig.IndividualEndPoint, DetailEntity)
    .subscribe(userInfo=>this.user = userInfo);
  }
}
