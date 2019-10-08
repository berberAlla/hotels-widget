import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpService {

  constructor(private http: HttpClient){}

  countriesRequest(){
    return this.http.get<{}>(`https://hotels-widget.firebaseio.com/countries.json`);
  }
}
