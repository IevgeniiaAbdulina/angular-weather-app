export interface Units {
  valueUnits: string,
  value?: string,
  type?: string
}

export enum TempTypeUnits {
  celsius = 0x2103,
  fahrenheit = 0x2109,
}

export enum WindSpeedUnits {
  'km/h',
  'm/s',
  'mph'
}

export enum AtmosphericPressureUnits {
  'hPa',
  'mbar',
  'atm'
}

export interface TempUnits extends Units {
  type?: 'temperature'
}

export interface WindUnits extends Units {
  type?: 'windSpeed'
}

export interface PressureUnits extends Units {
  type?: 'pressure'
}

export interface ForecastUnits {
  'temperature'?: string,
  'windSpeed'?: string,
  'pressure'?: string,
  'humidity'?: string
}
