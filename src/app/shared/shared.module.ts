import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from './material-design/material-design.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WeatherForecastComponent } from '../components/weather-forecast/weather-forecast.component';
import { DayForecastComponent } from '../components/day-forecast/day-forecast.component';
import { GeolocationWeatherReportComponent } from '../components/geolocation-weather-report/geolocation-weather-report.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SearchPlacesComponent } from '../components/search-places/search-places.component';
import { WeatherDetailsComponent } from '../components/weather-details/weather-details.component';
import { WeatherReportComponent } from '../components/weather-report/weather-report.component';



const components = [
  DayForecastComponent,
  GeolocationWeatherReportComponent,
  PageNotFoundComponent,
  SearchPlacesComponent,
  WeatherDetailsComponent,
  WeatherReportComponent,
  SidenavComponent,
  WeatherForecastComponent
]



@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [
    MaterialDesignModule,
    ...components
  ]
})
export class SharedModule { }
