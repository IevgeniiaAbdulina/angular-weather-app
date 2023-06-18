import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from './material-design/material-design.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WeatherForecastComponent } from '../components/weather-forecast/weather-forecast.component';
import { DayForecastComponent } from '../components/day-forecast/day-forecast.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { WeatherDetailsComponent } from '../components/weather-details/weather-details.component';
import { FooterComponent } from './components/footer/footer.component';



const components = [
  DayForecastComponent,
  PageNotFoundComponent,
  WeatherDetailsComponent,
  SidenavComponent,
  WeatherForecastComponent,
  FooterComponent
]



@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialDesignModule,
  ],
  exports: [
    MaterialDesignModule,
    ...components
  ]
})
export class SharedModule { }
