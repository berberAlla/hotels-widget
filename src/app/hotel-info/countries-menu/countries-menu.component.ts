import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";
import {Hotel} from "../../shared/global-exports/exports";




@Component({
  selector: 'app-countries-menu',
  templateUrl: './countries-menu.component.html',
  styleUrls: ['./countries-menu.component.css']
})
export class CountriesMenuComponent implements OnInit{

  constructor(private dataStorage: DataStorageService) {

  }
  countriesList: Array<string> = ['Czech Republic','Montenegro','Swiss','Italy','Israel','Germany','Ukraine'];
  countries: {};
  countryName: string;
  selectedCountryHotels: Hotel[];
  selectedHotelIndex: number = 0;

  ngOnInit(): void {

    this.dataStorage.countries
      .subscribe((countries: {}) => {
        this.countries = countries;
      });

    this.dataStorage.selectedCountry
      .subscribe((countryName: string) => {
        this.countryName = countryName;
      });

    this.dataStorage.selectedHotelIndex
      .subscribe((selectedHotelIndex) => {
        this.selectedHotelIndex = selectedHotelIndex;
      });
  }

  onCountrySelect(country: number | HTMLElement){
    if(typeof country === 'number'){
      this.countryName = this.countriesList[country];
    }
    else{
      this.countryName = (country as HTMLElement).textContent;
    }
    this.selectedCountryHotels = this.countries[this.countryName.split(' ').join('')];
    this.dataStorage.selectedHotel.next(this.selectedCountryHotels[this.selectedHotelIndex]);
    this.dataStorage.selectedCountry.next(this.countryName);
  }
  onCountriesPaging(index: number){
    this.onCountrySelect(index);
  }

}
