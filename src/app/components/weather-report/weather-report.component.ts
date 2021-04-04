import { Component, OnInit } from '@angular/core';
import { WhetherMapApiService } from 'src/app/services/whether-map-api.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  cityId: string;
  weatherResponse;
  img_res;
  loadImage: boolean;
  constructor(private apiservice: WhetherMapApiService) { }

  ngOnInit(): void {
    this.cityId = '30531';
   
    this.apiservice.getCityweatherReport(this.cityId).subscribe(data => {
    this.weatherResponse= data;
    console.log('weather dtaa', this.weatherResponse);
    if(this.weatherResponse) {
      const img = this.weatherResponse.weather[0].icon;
      this.img_res = this.apiservice.getIconUrl(img);
      console.log(this.img_res);
      this.loadImage = true;
    }
    });
    }

}
