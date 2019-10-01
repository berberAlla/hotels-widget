import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { WheatherComponent } from './wheather/wheather.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelInfoComponent,
    WheatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
