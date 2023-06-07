import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { CitySummary } from 'src/app/models/city-summary';
import { GeoResponse } from 'src/app/models/geo-response';

import { SearchService } from 'src/app/services/search/search.service';

import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  startWith,
  switchMap
} from 'rxjs';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherResponse } from 'src/app/models/weather-response';


@Component({
  selector: 'app-weather-controller',
  templateUrl: './weather-controller.component.html',
  styleUrls: ['./weather-controller.component.sass']
})
export class WeatherControllerComponent implements OnInit {
  public loading: boolean = false;
  public search: boolean = false;
  public searchControl: FormControl;
  public cityAutoSuggestions: Observable<CitySummary[]>;
  public weatherData$ = new Observable<any>();

  public cityName: string;

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.searchControl = new FormControl('');

    this.findCityName();
  }

  searchToggle(): void {
    this.search = !this.search;
  }

  clearInput(): void {
    this.searchControl.reset()
  }

  closeInput(): void {
    this.clearInput();
    this.searchToggle();
  }

  findCityName() {
    this.cityAutoSuggestions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((cityNamePrefix: string) => {
          let cities: Observable<CitySummary[]> = of([]);

          if(cityNamePrefix && cityNamePrefix.length >= 3) {

            cities = this.searchService.findCities(cityNamePrefix)
            .pipe(
              map(
                (response: GeoResponse) => {
                  response.data.forEach((element: any) => {
                    console.log('--> response item', JSON.stringify(element))
                  });

                  return response.data
                },
                (error: any) => console.log(error),
              )
            )
          };

          return cities;
        })
      );
  }

  getCityDisplayName(city: CitySummary) {
    if(!city) null;
    let name = city.name;

    name += ", " + city.region;
    name += ", " + city.country;

    return name;
  }

  selectOption(e: MatAutocompleteSelectedEvent): void {
    const name = e.option.value;

    console.log('FOUND CITY: ', name);

    this.weatherData$ = this.weatherService.getWeatherForCity(name)
      .pipe(
        map((response: WeatherResponse) => response,
          (error: any) => console.log(error)
        )
      );
  };
}
