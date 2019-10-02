import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import {HttpService} from '../services/http.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  @Output('hotelSelected') hotelSelected: EventEmitter<any> = new EventEmitter();

  @ViewChild('cz', {static: true}) defaultSelected: ElementRef;
  @ViewChild('descriptions', {static: true}) descriptions: ElementRef;
  defaultCountry = 'Czech Republic';
  countryName: string = this.defaultCountry;

  hotels: [] = [];

  selectedHotelIndex = 0;
  selectedPicIndex = 0;

   subscription: Subscription;

  ngOnInit() {
     this.defaultCountryRequest();
  }

  defaultCountryRequest(){
    this.subscription = this.httpService.getData(this.defaultCountry.split(' ').join(''))
      .subscribe((hotels: []) => {
        this.hotels = hotels;
        this.hotelSelected.emit(this.hotels[this.selectedHotelIndex]);
        this.subscription.unsubscribe();
      });
  }

  onCountrySelect(country) {
    this.countryName = country.innerText;
    this.hotelSelected.emit(null);
    const countryToRequest = country.innerText.split(' ').join('');
    this.hotels = [];
    this.httpService.getData(countryToRequest)
      .subscribe((hotels: []) => {
        this.hotels = hotels;
        this.selectedHotelIndex = 0;
        this.hotelSelected.emit(this.hotels[this.selectedHotelIndex]);
      });
  }


  calcBounds(bound: number, offset: number) {
    return bound + pageYOffset + offset;
  }

  onHotelScrollSelect(event: Event) {
    const target = event.target as HTMLElement;
    const descriptions = Array.from(target.children) as HTMLElement[];
    const index = descriptions.findIndex((elem: HTMLElement) => {
      const elemY = elem.getBoundingClientRect().top;
      const parentBottom = target.getBoundingClientRect().top + target.getBoundingClientRect().height;
      const parentTop = target.getBoundingClientRect().top;

      return ((this.calcBounds(elemY, -50)) <= this.calcBounds(parentBottom, 0)) &&
        (this.calcBounds(elemY, 50) >= this.calcBounds(parentTop, 0));
    });

    if (index >= 0 && index !== this.selectedHotelIndex) {
      this.selectedHotelIndex = index;
      this.hotelSelected.emit(this.hotels[this.selectedHotelIndex]);
    }
  }

  onHotelPicSelect(event: Event) {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    this.selectedPicIndex = Array.from(target.parentElement.children)
      .findIndex((elem) => {
        return elem === target;
      });
  }
}
