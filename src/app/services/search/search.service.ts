import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * [GET] Cities
   *
   */
  findCities(namePrefix: string) {
    const path = `${this.URL}/cities`;

    const options = {
      method: 'GET' as const,
      headers: {
        'X-RapidAPI-Key': 'af3cbae116mshd905baeea568143p1fb5c4jsnaea8ccd62c82',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      } as const,
      params: {
        namePrefix: namePrefix,
        minPopulation: 100000,
        types: "CITY",
        limit: 5,
        sort: 'population',
        offset: 0,
      }
    }

    return this.http.get<any>(path, options);
  }
}
