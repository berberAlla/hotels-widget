import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HotelsScrollService} from "../services/hotels-scroll.service";
import {Hotel} from "../../shared/global-exports/exports";
import {DataStorageService} from "../../shared/services/data-storage.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {

  constructor(private hotelScrollService: HotelsScrollService,
              private dataStorage: DataStorageService) { }

  selectedPicIndex: number = 0;
  countryName: string;

  ngOnInit() {
    this.dataStorage.selectedCountry
      .subscribe((countryName: string) => {
        this.countryName = countryName;
      })
  }

  getCountryHotels(): Subject<Hotel[]>{
    return this.dataStorage.selectedCountryHotels;
  }

  onHotelScrollSelect(element: HTMLElement){
    this.hotelScrollService.scrollHandle(element);
  }

  onHotelPicSelect(selectedPic,pics){
    this.selectedPicIndex = Array.from(pics.children)
      .findIndex((pic) => {
        return pic === selectedPic;
      });
    this.dataStorage.selectedPicIndex.next(this.selectedPicIndex);
  }

}
