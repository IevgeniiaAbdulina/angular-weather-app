import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgFor} from '@angular/common';

import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GeolocationWeatherReportComponent } from './components/geolocation-weather-report/geolocation-weather-report.component';
import { SearchPlacesComponent } from './components/search-places/search-places.component';
import { WeatherControllerModule } from './modules/weather-controller/weather-controller.module';
import { MaterialDesignModule } from './shared/material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    PageNotFoundComponent,
    GeolocationWeatherReportComponent,
    SearchPlacesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    NgFor,
    WeatherControllerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
