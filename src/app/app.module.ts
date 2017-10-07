import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigningModule } from './signing/signing.module';
import { ProfileModule } from './profile/profile.module';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SigningModule,
    ProfileModule,
    HttpModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
