import {Component} from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
import { ProfileApiConfig } from '../../configs/api_config';
import { ExperienceEntity } from './experience.entity';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls : ['./experience.component.css']
})
export class ExperienceComponent{
  private experiences : ExperienceEntity[];
  constructor(private ApiProvider : ProfileService){
    this.ApiProvider.Get(ProfileApiConfig.ExperienceEndPoint, ExperienceEntity)
    .subscribe(experiences=>this.experiences = experiences);
  }
}
