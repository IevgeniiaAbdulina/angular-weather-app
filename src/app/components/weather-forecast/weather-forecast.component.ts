import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WeatherResponse } from 'src/app/models/weather-response';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.sass']
})
export class WeatherForecastComponent implements OnInit {
  public data$: Observable<any>;
  public today: Date = new Date();

  private latitude: number;
  private longitude: number;

  @Input()
  cityName: any

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.data$ = this.weatherService.getWeatherForLatLon(this.latitude, this.longitude);
    })
  }
}
