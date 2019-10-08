import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from "../services/data-storage.service";
import {Hotel} from "../shared/global-exports/exports";


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) { }

  hotel: Hotel;

  ngOnInit() {
    this.dataStorage.selectedHotel
      .subscribe((hotel: Hotel) => {
        this.hotel = hotel;
      })
  }

}
