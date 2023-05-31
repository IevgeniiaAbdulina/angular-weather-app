import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APIkey: string = 'ea0bbc74362141bcef9e2e20bff7ec0f';
  units: string; // Kelvin

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ea0bbc74362141bcef9e2e20bff7ec0f`;

    return this.http.get<any>(path).pipe(
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }

  getWeatherForLatLon(lat: number, lon: number): Observable<any> {
    this.units = 'metric'; // Celsius
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${this.units}&appid=${this.APIkey}`;

    return this.http.get<any>(path).pipe(
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }
}
