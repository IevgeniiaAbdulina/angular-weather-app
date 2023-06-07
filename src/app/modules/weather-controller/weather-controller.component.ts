import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-controller',
  templateUrl: './weather-controller.component.html',
  styleUrls: ['./weather-controller.component.sass']
})
export class WeatherControllerComponent implements OnInit {
  public loading: boolean = false;
  public search: boolean = false;

  public cityName: string;

  constructor() {}

  ngOnInit() {
    this.findCityName()
  }

  searchToggle() {
    return this.search = !this.search;
  }

  clearInput() {
    return console.log('Clear this input field')
  }

  findCityName() {
    console.log('Find city cityName')
    return this.cityName = 'Oslo';
  }
}
