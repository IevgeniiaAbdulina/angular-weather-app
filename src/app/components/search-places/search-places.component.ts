import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { CitySummary } from 'src/app/interfaces/city-summary';
import { GeoResponse } from 'src/app/interfaces/geo-response';
import { SearchResult } from 'src/app/interfaces/search-result';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-places',
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.sass']
})
export class SearchPlacesComponent implements OnInit {
  public searchControl: FormControl;
  public searchResults$: Observable<SearchResult[]>;
  public cityAutoSuggestions: Observable<CitySummary[]>;

  constructor(
    private searchService: SearchService,
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

                  return response.data
                },
                (error: any) => console.log(error),
              )
            )
          };

          return cities;
        })
      )
  }

  getErrorMessage() {
    const errorMessage = "Geolocation is not supported by this browser.";
    return errorMessage;
  }

  getCityDisplayName(city: CitySummary) {
    if(!city) null;
    let name = city.name;
    console.log('--> ', city);

    name += ", " + city.region;
    name += ", " + city.country;

    return name;
  }

}
