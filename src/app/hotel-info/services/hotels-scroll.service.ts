import {DataStorageService} from "../../shared/services/data-storage.service";
import {Hotel} from "../../shared/global-exports/exports";
import {Injectable} from "@angular/core";


@Injectable()
export class HotelsScrollService{

  constructor(private dataStorage: DataStorageService){
   this.dataStorage.selectedCountryHotels
     .subscribe((selectedCountryHotels) => {
       this.selectedCountryHotels = selectedCountryHotels;
     })
  }

  selectedCountryHotels: Hotel[];


  calcBounds(bound,offset){
    return bound + pageYOffset + offset;
  }

  scrollHandle(element){
    const descriptions = Array.from(element.children) as HTMLElement[];
    const index = descriptions.findIndex((elem: HTMLElement) => {
      const elemY = elem.getBoundingClientRect().top;
      const parentBottom = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
      const parentTop = element.getBoundingClientRect().top;

      return ((this.calcBounds(elemY,-50)) <= this.calcBounds(parentBottom,0)) &&
        (this.calcBounds(elemY,50) >= this.calcBounds(parentTop,0));
    });

    if(index >= 0){
      this.dataStorage.selectedHotel.next(this.selectedCountryHotels[index]);
      this.dataStorage.selectedHotelIndex.next(index);
    }
  }
}
