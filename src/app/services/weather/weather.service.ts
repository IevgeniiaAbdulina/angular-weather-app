import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APIkey: string = 'ea0bbc74362141bcef9e2e20bff7ec0f';

  constructor(private http: HttpClient) { }

  /**
   * [GET] Weather for city by name
   *
   */
  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ea0bbc74362141bcef9e2e20bff7ec0f`;
    // another APPID = 695ed9f29c4599b7544d0db5c211d499

    return this.http.get<any>(path).pipe(
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }


  /**
   * [GET] Weather for city by current geolocation
   *
   * latitude,
   * longitude
   */
  getWeatherForLatLon(lat: number, lon: number): Observable<any> {
    const units = 'metric'; // Celsius
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.APIkey}`;

    return this.http.get<any>(path).pipe(
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }
}
