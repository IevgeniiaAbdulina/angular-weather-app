import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { CitySummary } from 'src/app/models/city-summary';
import { GeoResponse } from 'src/app/models/geo-response';
import { WeatherResponse } from 'src/app/models/weather-response';
import { SearchService } from 'src/app/services/search/search.service';
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

  public cityAutoSuggestions: Observable<CitySummary[]>;
  public search: boolean = false;
  public loading: boolean = false;
  public searchControl: FormControl;

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.findCityName();

    setInterval(() => {
      this.data$.subscribe(data => {
        this.data$ = this.weatherService.getWeatherForCity(data.name)
      })
    }, 3600000);

    this.getWeatherForLocation();
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

  getWeatherForLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.data$ = this.weatherService.getWeatherForLatLon(this.latitude, this.longitude);
    })
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
                (response: GeoResponse) => response.data,
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

    this.data$ = this.weatherService.getWeatherForCity(name)
      .pipe(
        map((response: WeatherResponse) => response,
          (error: any) => console.log(error)
        ),
      );

      this.closeInput();
  };

}
