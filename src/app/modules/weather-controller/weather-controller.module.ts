import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherControllerComponent } from './weather-controller.component';
import { DayForecastComponent } from 'src/app/components/day-forecast/day-forecast.component';
import { WeatherDetailsComponent } from 'src/app/components/weather-details/weather-details.component';
import { WeatherForecastComponent } from 'src/app/components/weather-forecast/weather-forecast.component';



@NgModule({
  declarations: [
    WeatherControllerComponent,
    WeatherForecastComponent,
    DayForecastComponent,
    WeatherDetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherControllerComponent,
  ]
})
export class WeatherControllerModule { }
