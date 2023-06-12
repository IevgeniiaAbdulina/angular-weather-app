import { Component, OnInit } from '@angular/core';

enum Units {
  celsius = 0x2103,
  fahrenheit = 0x2109,
}

enum 	WindSpeedUnits {
  'Kilometers per hour' = 'km/h',
  'Meters per second' = 'm/s',
  'Miles per hour' = 'mph'
}

enum AtmosphericPressureUnits {
  'Hectopascal' = 'hPa',
  'Millibar' = 'mbar',
  'Standard atmosphere' = 'atm'
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit{
  // Temperature units
  public celsius = String.fromCodePoint(Units.celsius);
  public fahrenheit: string = String.fromCodePoint(Units.fahrenheit);
  public tempUnits = this.celsius;

  // Wind Speed Units
  public windKmH = WindSpeedUnits['Kilometers per hour'];
  public windMS = WindSpeedUnits['Meters per second'];
  public windMPh = WindSpeedUnits['Miles per hour'];
  public windUnits = this.windMS;

  // Pressure Units
  public hectopascal = AtmosphericPressureUnits.Hectopascal;
  public millibar = AtmosphericPressureUnits.Millibar;
  public standardAtmosphere = AtmosphericPressureUnits['Standard atmosphere'];
  public pressureUnits = this.millibar;

  constructor( ) {}

  ngOnInit() {

  }
}
