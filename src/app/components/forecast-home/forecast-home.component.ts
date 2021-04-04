import { Component, OnInit } from '@angular/core';
import { WhetherMapApiService } from 'src/app/services/whether-map-api.service';

@Component({
  selector: 'app-forecast-home',
  templateUrl: './forecast-home.component.html',
  styleUrls: ['./forecast-home.component.scss']
})
export class ForecastHomeComponent implements OnInit {
  cityId: string;
  forecastResponse;
  img_res;
  loadImage : boolean;
  constructor(private apiservice: WhetherMapApiService) { }

  ngOnInit(): void {
    this.cityId = '30531';
    this.apiservice.getCityforecastReport(this.cityId).subscribe(data => {
    this.forecastResponse = data['list'];
    console.log('forecast dtaa', this.forecastResponse);
    });
  }
  
  getImage(iconId: string) {
    console.log('iconId dtaa', iconId);
    if(this.forecastResponse) {
      this.img_res = this.apiservice.getIconUrl(iconId);
      console.log(this.img_res);
      this.loadImage = true;
    }
  }
}
