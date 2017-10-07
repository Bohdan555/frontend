import {Component} from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
import { ProfileApiConfig } from '../../configs/api_config';
import { DetailsEntity } from './details.entity';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls : ['./details.component.css'],
  providers: [DetailsEntity]
})
export class DetailsComponent{
 constructor(private headerProvider : ProfileService, private user : DetailsEntity){
    this.headerProvider.Get(ProfileApiConfig.IndividualEndPoint,this.user).subscribe(data=>data);
 }
}
