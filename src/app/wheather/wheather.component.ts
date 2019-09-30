import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements AfterViewChecked {

  constructor() { }

  @Input() hotel;


  ngAfterViewChecked(): void {

  }
}
