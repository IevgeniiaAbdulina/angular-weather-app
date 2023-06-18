import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

enum TempTypeUnits {
  celsius = 0x2103,
  fahrenheit = 0x2109,
}

enum WindSpeedUnits {
  'km/h',
  'm/s',
  'mph'
}

enum AtmosphericPressureUnits {
  'hPa',
  'mbar',
  'atm'
}

interface TempUnits {
  valueUnits: string
}

interface WindUnits {
  value: string,
  valueUnits: string
}

interface PressureUnits {
  value: string,
  valueUnits: string
}


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
  ]

  constructor( ) {}

  ngOnInit() {
    this.tempUnitsSelected = this.tempUnits[0].valueUnits;
    this.windUnitSelected = this.windUnits[1].valueUnits;
    this.pressureUnitSelected = this.pressureUnits[0].valueUnits;
  }
}
