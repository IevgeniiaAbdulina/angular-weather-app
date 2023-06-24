import { Component, OnInit } from '@angular/core';
import { AtmosphericPressureUnits, ForecastUnits, PressureUnits, TempTypeUnits, TempUnits, WindSpeedUnits, WindUnits } from 'src/app/models/forecast-units';
import { ForecastUnitsService } from 'src/app/services/forecast-units/forecast-units.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit{
  // Temperature units
  public tempUnitsSelected: any;

  public celsius = String.fromCodePoint(TempTypeUnits.celsius);
  public fahrenheit= String.fromCodePoint(TempTypeUnits.fahrenheit);

  public tempUnits: TempUnits[] = [
    {valueUnits: this.celsius},
    {valueUnits: this.fahrenheit}
  ]

  // Wind Speed Units
  public windUnitSelected: any;

  public windUnits: WindUnits[] = [
    {value: 'Kilometers per hour', valueUnits: WindSpeedUnits[0]},
    {value: 'Meters per second', valueUnits: WindSpeedUnits[1]},
    {value: 'Miles per hour', valueUnits: WindSpeedUnits[2]}
  ];

  // Pressure Units
  public pressureUnitSelected: any;

  public pressureUnits: PressureUnits[] = [
    {value: 'Hectopascal', valueUnits: AtmosphericPressureUnits[0]},
    {value: 'Millibar', valueUnits: AtmosphericPressureUnits[1]},
    {value: 'Standard atmosphere', valueUnits: AtmosphericPressureUnits[2]}
  ];

  public selectedUnits: ForecastUnits = {};

  constructor(private unitsService: ForecastUnitsService) {
    this.tempUnitsSelected = this.tempUnits[0].valueUnits;
    this.windUnitSelected = this.windUnits[1].valueUnits;
    this.pressureUnitSelected = this.pressureUnits[0].valueUnits;
  }

  ngOnInit() {
    this.selectedUnits = {
      'temperature': this.tempUnitsSelected,
      'windSpeed': this.windUnitSelected,
      'pressure': this.pressureUnitSelected,
      'humidity': '%'
    };

    let setSelectedUnits = JSON.stringify(this.selectedUnits);
    localStorage.setItem('selectedUnits', setSelectedUnits);
  }

  changeSelected(value: any, type: string) {
    let units = JSON.parse(localStorage.getItem("selectedUnits") || '');

    switch (type) {
      case 'temperature':
        units.temperature = value;
        this.unitsService.updateUnits(units)
        break;
      case 'windSpeed':
        units.windSpeed = value;
        this.unitsService.updateUnits(units)
        break;

      case 'pressure':
        units.pressure = value;
        this.unitsService.updateUnits(units)
        break;

      default:
        console.log('Please pick a type of units!')
    }
  }

}
