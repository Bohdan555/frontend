import {Component} from '@angular/core';
import {SkillEntity} from './skills.entity';
import { ProfileService } from '../../../services/ProfileService';
import { ProfileApiConfig } from '../../../configs/api_config';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls : ['./skills.component.css']
})
export class SkillsComponent{
 private skills : SkillEntity[];
 constructor(private ApiProvider: ProfileService)
 {
   this.ApiProvider.Get(ProfileApiConfig.SkillsEndPoint, SkillEntity)
   .subscribe(skills => this.skills = skills);
 }
}
