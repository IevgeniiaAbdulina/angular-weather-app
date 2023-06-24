import { Component, Input, OnInit } from '@angular/core';
import { ForecastUnits } from 'src/app/models/forecast-units';
import { ForecastUnitsService } from 'src/app/services/forecast-units/forecast-units.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.sass'],
})
export class WeatherDetailsComponent implements OnInit {
  @Input() data: any;

  public units: ForecastUnits;
  public customData : any;

  constructor(private unitsService: ForecastUnitsService) {}

  ngOnInit(): void {
    this.customData = this.data;

    this.unitsService.units.subscribe(res => {
      this.units = res;

      this.customData = this.unitsService.updateData(this.units, this.data);
    })
  }
}
