import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { CitySummary } from 'src/app/models/city-summary';
import { GeoResponse } from 'src/app/models/geo-response';
import { SearchResult } from 'src/app/models/search-result';
import { WeatherResponse } from 'src/app/models/weather-response';
import { SearchService } from 'src/app/services/search/search.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-search-places',
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.sass']
})
export class SearchPlacesComponent implements OnInit {
  public searchControl: FormControl;
  public searchResults$: Observable<SearchResult[]>;
  public cityAutoSuggestions: Observable<CitySummary[]>;

  weatherData$: Observable<any>;
  today: Date = new Date();

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.searchControl = new FormControl('');

    this.cityAutoSuggestions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((cityNamePrefix: string) => {
          let cities: Observable<CitySummary[]> = of([]);

          if(cityNamePrefix && cityNamePrefix.length >= 1) {

            cities = this.searchService.findCities(cityNamePrefix)
            .pipe(
              map(
                (response: GeoResponse) => {
                  console.log('LENGTH RES ', response.data.length);
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

  getErrorMessage() {
    const errorMessage = "Geolocation is not supported by this browser.";
    return errorMessage;
  }

  getCityDisplayName(city: CitySummary) {
    if(!city) null;
    let name = city.name;

    name += ", " + city.region;
    name += ", " + city.country;

    return name;
  }

  selectOption(e: MatAutocompleteSelectedEvent) {
    const foundCity = e.option.value;
    console.log('FOUND CITY: ', foundCity);

    this.weatherData$ = this.weatherService.getWeatherForCity(foundCity)
      .pipe(
        map((response: WeatherResponse) => response,
          (error: any) => console.log(error)
        )
      );
  };
}
