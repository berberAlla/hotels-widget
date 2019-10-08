
import { AppComponent } from './app.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { SocialComponent } from './social/social.component';
import {NgModule} from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {PhoneTransformPipe} from "./hotel-info/pipes/phone-transform.pipe";
import { CountriesMenuDirective } from './directives/countries-menu.directive';
import {DataStorageService} from "./services/data-storage.service";
import {HttpService} from "./services/http.service";
import { CountriesMenuComponent } from './hotel-info/countries-menu/countries-menu.component';
import {HotelsScrollService} from "./hotel-info/services/hotels-scroll.service";
import { DescriptionsComponent } from './hotel-info/descriptions/descriptions.component';
import {WeatherComponent} from "./weather/weather.component";
import {ITEMS_IN_MENU} from "./shared/global-exports/exports";


@NgModule({
  declarations: [
    AppComponent,
    CountriesMenuComponent,
    HotelInfoComponent,
    WeatherComponent,
    SocialComponent,
    PhoneTransformPipe,
    CountriesMenuDirective,
    DescriptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataStorageService,
    HttpService,
    HotelsScrollService,
    {provide: ITEMS_IN_MENU,useValue: 10}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
