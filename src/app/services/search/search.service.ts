import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GEO_DB_KEY, GEO_DB_URL } from 'src/app/models/api-keys';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  /**
   * [GET] Cities
   *
   */
  findCities(namePrefix: string) {
    const path = GEO_DB_URL;

    const options = {
      method: 'GET' as const,
      headers: {
        'X-RapidAPI-Key': GEO_DB_KEY,
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
