import { NgModule } from '@angular/core'
import { SigningComponent } from './signing.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports : [CommonModule,FormsModule],
  declarations : [SigningComponent],
  exports : [SigningComponent]
})

export class SigningModule{

}
