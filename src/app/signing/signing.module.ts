import { NgModule } from '@angular/core'
import { SigningComponent } from './signing.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Logger} from '../services/LogService';

@NgModule({
  imports : [CommonModule,FormsModule,HttpModule],
  declarations : [SigningComponent],
  exports : [SigningComponent],
  providers : [Logger]
})

export class SigningModule{

}
