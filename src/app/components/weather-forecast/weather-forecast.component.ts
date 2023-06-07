import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.sass']
})
export class WeatherForecastComponent implements OnInit {
  public data$: Observable<any>;
  public today: Date = new Date();

  @Input()
  cityName: any

  constructor() {}

  ngOnInit() {}

  getWeatherForCity() {}

  getGeolocation() {}

}
