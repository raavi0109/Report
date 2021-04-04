import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let forecastUrl: String = 'http://api.openweathermap.org/data/2.5/forecast';
let weatherUrl: String = 'http://api.openweathermap.org/data/2.5/weather';
let apiKey: String = '1e4ac168d28c9d30ce310e2439b837e7';
@Injectable({
  providedIn: 'root'
})
export class WhetherMapApiService {

  constructor(private http: HttpClient) { }
  getCityweatherReport(cityId: String) {
    return this.http.get(weatherUrl + '?q=' + cityId + '&APPID=' + apiKey)
  }
  getCityforecastReport(cityId: String) {
    return this.http.get(forecastUrl + '?q=' + cityId + '&APPID=' + apiKey)
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
