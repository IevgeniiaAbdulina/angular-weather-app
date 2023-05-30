import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable, map, filter, concatMap } from 'rxjs';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.sass']
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any>;
  today: Date = new Date();

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map((params) => params['locationName']),
      filter((name) => !!name),
      concatMap((name) => this.weatherService.getWeatherForCity(name))
    )

    this.data$.subscribe((res) => {
      console.log(
        '--> DATA: ', res['weather'][0].description,
      )
    })

  }

}
