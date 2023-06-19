import { Component, OnInit } from '@angular/core';

interface Units {
  valueUnits: string,
  value?: string,
}

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

interface TempUnits extends Units {
  type?: 'temperature'
}

interface WindUnits extends Units {
  type?: 'windSpeed'
}

interface PressureUnits extends Units {
  type?: 'pressure'
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
  ];

  public selectedUnits: any = {};

  constructor( ) {
    this.tempUnitsSelected = this.tempUnits[0].valueUnits;
    this.windUnitSelected = this.windUnits[1].valueUnits;
    this.pressureUnitSelected = this.pressureUnits[0].valueUnits;
  }

  ngOnInit() {
    this.selectedUnits = {
      'temperature': this.tempUnitsSelected,
      'windSpeed': this.windUnitSelected,
      'pressure': this.pressureUnitSelected
    };

    let setSelectedUnits = JSON.stringify(this.selectedUnits);
    localStorage.setItem('selectedUnits', setSelectedUnits);
  }

  changeSelected(value: any, type: string) {
    let units = JSON.parse(localStorage.getItem("selectedUnits") || '');

    console.log('1 value: ', value, ' --> type: ', type, ' \n ', units);

    switch (type) {
      case 'temperature':
        units.temperature = value;
        localStorage.setItem('selectedUnits', JSON.stringify(units));
        break;
      case 'windSpeed':
        units.windSpeed = value;
        localStorage.setItem('selectedUnits', JSON.stringify(units));
        break;

      case 'pressure':
        units.pressure = value;
        localStorage.setItem('selectedUnits', JSON.stringify(units));
        break;

      default:
        console.log('Please pick a type of units!')
    }
    console.log('1 value: ', value, ' --> type: ', type, ' \n ', units);
  }

}
