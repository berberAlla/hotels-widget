import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Hotel} from "../global-exports/exports";


@Injectable()
export class DataStorageService {

  constructor(){
  }

  countries: Subject<{}> = new Subject<{}>();
  selectedHotel: Subject<Hotel> = new Subject<Hotel>();
  selectedCountry: Subject<string> = new Subject<string>();
  selectedCountryHotels: Subject<Hotel[]> = new Subject<Hotel[]>();
  selectedPicIndex: Subject<number> = new Subject<number>();
  selectedHotelIndex: Subject<number> = new Subject<number>();
}
