import {Component} from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
import { ProfileApiConfig } from '../../configs/api_config';

@Component({
  selector: 'feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls : ['./feedbacks.component.css']
})
export class FeedbacksComponent{
  private feedbacks : any = {};
  constructor(private feedbacksProvider : ProfileService){
    //this.feedbacksProvider.Get(ProfileApiConfig.FeedbacksEndPoint).subscribe(feedbacks => {this.feedbacks = feedbacks; console.log(feedbacks); });
  }
}
