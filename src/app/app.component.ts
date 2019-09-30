import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hw1';
  constructor(){}

  hotelInfo;
  ngOnInit(): void {

    // this.printAll([1,2,3,4,5]);
    // let arr = [1,2,2,1,3];
    // console.log(this.isPallendrom(arr,0,arr.length - 1));
    // console.log(this.power(4,4));
  }

  hotelSelected(hotelInfo){
    this.hotelInfo = hotelInfo;
  }

  // map(arr,func){
  //
  // }
  //
  // power(a,b){
  //   if(b === 0){
  //     return 1;
  //   }
  //   return a * this.power(a,b - 1);
  // }
  //
  // printAll(arr){
  //   if(arr.length === 0){return;}
  //   console.log(arr[0]);
  //   this.printAll(arr.slice(1));
  // }
  //
  // isPallendrom(arr,i,j){
  //   if(arr[i] !== arr[j] || i >= j){return false;}
  //   this.isPallendrom(arr,++i,--j);
  //   return true;
  // }
}
