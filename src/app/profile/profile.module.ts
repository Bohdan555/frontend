import { NgModule } from '@angular/core'
import { ProfileComponent } from './profile.component'
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { DetailsComponent } from './details/details.component';
import { PersonalInfoModule } from './personalInfo/personalInfo.module';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileService } from '../services/ProfileService';
import { RatingDirective } from './feedbacks/RatingDirective.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports : [BrowserModule,CommonModule,PersonalInfoModule],
  declarations : [ProfileComponent,DetailsComponent,ExperienceComponent,FeedbacksComponent,FooterComponent,RatingDirective],
  exports : [ProfileComponent],
  providers: [ ProfileService],
  bootstrap:[ProfileComponent]
})

export class ProfileModule{

}
