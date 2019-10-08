import {Component, OnInit} from "@angular/core";
import {DataStorageService} from "./services/data-storage.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dataStorage: DataStorageService) {}
  countries: {};
  ngOnInit(): void {

    this.dataStorage.countries
      .subscribe((countries: {}) => {
        this.countries = countries;
      })
  }
}
