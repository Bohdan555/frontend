import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigningModule } from './signing/signing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SigningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
