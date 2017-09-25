import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigningModule } from './signing/signing.module'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SigningModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
