

import {HttpService} from "../services/http.service";

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {DataStorageService} from "../services/data-storage.service";
import {Hotel} from "../shared/global-exports/exports";
import {HotelsScrollService} from "./services/hotels-scroll.service";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  constructor(private dataStorage: DataStorageService,
              private hotelScrollService: HotelsScrollService,
              private http: HttpService) { }


  defaultCountry: string = 'Czech Republic';

  countryName: string = this.defaultCountry;

  countries: {};
  selectedPicIndex: number = 0;
  selectedHotel: Hotel;

  selectedCountryHotels: Hotel[];

  ngOnInit() {

    this.http.countriesRequest()
      .subscribe((countries: {}) => {
        this.selectedHotel = countries[this.defaultCountry.split(' ').join('')][0];
        this.selectedCountryHotels = countries[this.defaultCountry.split(' ').join('')];
        this.countries = countries;
        setTimeout(() => { // dispatch default values
          this.dataStorage.countries.next(this.countries);
          this.dataStorage.selectedCountry.next(this.defaultCountry);
          this.dataStorage.selectedHotel.next(countries[this.defaultCountry.split(' ').join('')][0]);
          this.dataStorage.selectedCountryHotels.next(countries[this.defaultCountry.split(' ').join('')]);
        },0);
    });


    this.dataStorage.selectedCountry
      .subscribe((countryName: string) => {
        this.countryName = countryName;
        if(!!countryName){
          this.selectedCountryHotels = this.countries[this.countryName.split(' ').join('')];
          this.dataStorage.selectedCountryHotels.next(this.selectedCountryHotels);
        }
      });

    this.dataStorage.selectedHotel
      .subscribe((selectedHotel: Hotel) => {
        this.selectedHotel = selectedHotel;
      });

    this.dataStorage.selectedPicIndex
      .subscribe((selectedPicIndex: number) => {
        this.selectedPicIndex = selectedPicIndex;
      });
  }
}
