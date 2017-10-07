import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonalInfoComponent } from './personalInfo.component';

@NgModule({
  imports : [CommonModule],
  declarations : [PersonalInfoComponent,SkillsComponent, HobbiesComponent],
  exports: [PersonalInfoComponent,SkillsComponent,HobbiesComponent]
})

export class PersonalInfoModule{

}
