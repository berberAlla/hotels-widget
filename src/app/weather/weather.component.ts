import {Component, OnInit} from "@angular/core";
import {DataStorageService} from "../shared/services/data-storage.service";
import {Hotel} from "../shared/global-exports/exports";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) { }

  hotel: Hotel;
  ngOnInit(): void {
    this.dataStorage.selectedHotel
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      })
  }
}
