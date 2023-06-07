import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.sass']
})
export class DayForecastComponent implements OnInit {
  @Input() data: any;
  @Input() today: any;
  @Input() cityName: string;

  constructor() {}

  ngOnInit(): void {
    console.log('DAY forecast data: ', this.data)
  }

}
