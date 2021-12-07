import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  apiUrl: string = "http://api.weatherstack.com/current?access_key=fac98dbfc3b783480ba30acb554f1930&query=";

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    console.log(this.apiUrl+location);
    return this.http.get(this.apiUrl+location);
    
}
}
