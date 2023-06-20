import { Component, Input, OnInit } from '@angular/core';
import { ForecastUnits } from 'src/app/models/forecast-units';
import { ForecastUnitsService } from 'src/app/services/forecast-units/forecast-units.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.sass']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() data: any;

  public units: ForecastUnits;

  constructor(private unitsService: ForecastUnitsService) {}

  ngOnInit(): void {
    this.unitsService.units.subscribe(data => {
      this.units = data;
    })
  }
}
