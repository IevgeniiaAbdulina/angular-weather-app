import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForecastUnits } from 'src/app/models/forecast-units';

@Injectable({
  providedIn: 'root'
})
export class ForecastUnitsService {
  units = new BehaviorSubject<ForecastUnits>({});

  constructor() {
    this.units.next(JSON.parse(localStorage.getItem("selectedUnits") || '{}'))
  }

  updateUnits(newUnits: ForecastUnits) {
    this.units.next(newUnits);
    localStorage.setItem('selectedUnits', JSON.stringify(newUnits));
  }

  updateData(units: ForecastUnits, data: any) {
   let newData = structuredClone(data);

   let temperatureData = data.main.temp;
   let windSpeedData = data.wind.speed;
   let pressureData = data.main.pressure;

  //  Temperature
   if(units.temperature === '℉') {
    newData.main.temp = (temperatureData * 9/5) + 32;
   }

   // Wind speed
   if(units.windSpeed === 'km/h') {
    newData.wind.speed = (windSpeedData * 3.6).toFixed(2);
   } else if(units.windSpeed === 'mph') {
    newData.wind.speed = (windSpeedData * 2.24).toFixed(2);
   }

   // Pressure
   if(units.pressure === 'mbar') {
    newData.main.pressure = pressureData;
   } else if(units.pressure === 'atm') {
    newData.main.pressure = (pressureData / 101.325).toFixed(2);
   }

   return newData;
  }

}
