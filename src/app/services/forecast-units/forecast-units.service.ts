import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForecastUnits } from 'src/app/models/forecast-units';

@Injectable({
  providedIn: 'root'
})
export class ForecastUnitsService {
  units = new BehaviorSubject<ForecastUnits>({});

  constructor() {
    this.units.next(JSON.parse(localStorage.getItem("selectedUnits") || ''))
   }

   updateUnits(newUnits: ForecastUnits) {
    this.units.next(newUnits);
    localStorage.setItem('selectedUnits', JSON.stringify(newUnits));
   }
}
