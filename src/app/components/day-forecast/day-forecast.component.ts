import { Component, OnInit, Input } from '@angular/core';
import { ForecastUnits } from 'src/app/models/forecast-units';
import { ForecastUnitsService } from 'src/app/services/forecast-units/forecast-units.service';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.sass']
})
export class DayForecastComponent implements OnInit {
  @Input() data: any;
  @Input() today: any;
  @Input() cityName: string;

  public newUnits: ForecastUnits;

  constructor(private unitsService: ForecastUnitsService) {}

  ngOnInit(): void {
    this.unitsService.units.subscribe(data => {
      this.newUnits = data;
    })
   }
}
