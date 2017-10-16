import {Component} from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
import { ProfileApiConfig } from '../../configs/api_config';
import { FeedbackEntity } from './feedback.entity';

@Component({
  selector: 'feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls : ['./feedbacks.component.css']
})
export class FeedbacksComponent{
  private feedbacks : FeedbackEntity[];
  constructor(private ApiProvider : ProfileService){
    this.ApiProvider.Get(ProfileApiConfig.FeedbacksEndPoint, FeedbackEntity)
    .subscribe(feedbacks =>this.feedbacks = feedbacks);
  }
}
