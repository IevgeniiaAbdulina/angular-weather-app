import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-geolocation-weather-report',
  templateUrl: './geolocation-weather-report.component.html',
  styleUrls: ['./geolocation-weather-report.component.sass']
})
export class GeolocationWeatherReportComponent implements OnInit {
  geolocationData$: Observable<any>;
  today: Date = new Date();

  latitude: number;
  longitude: number;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.geolocationData$ = this.weatherService.getWeatherForLatLon(this.latitude, this.longitude);
    })
  }
}
