import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GeolocationWeatherReportComponent } from './components/geolocation-weather-report/geolocation-weather-report.component';
import { SearchPlacesComponent } from './components/search-places/search-places.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { DayForecastComponent } from './components/day-forecast/day-forecast.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    PageNotFoundComponent,
    GeolocationWeatherReportComponent,
    SearchPlacesComponent,
    WeatherForecastComponent,
    DayForecastComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
