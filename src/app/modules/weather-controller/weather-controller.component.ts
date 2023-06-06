import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-controller',
  templateUrl: './weather-controller.component.html',
  styleUrls: ['./weather-controller.component.sass']
})
export class WeatherControllerComponent {
  public search: boolean = false;

  constructor() {}

  searchToggle() {
    return this.search = !this.search;
  }

  clearInput() {
    return console.log('Clear this input field')
  }
}
