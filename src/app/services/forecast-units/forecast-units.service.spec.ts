import { TestBed } from '@angular/core/testing';

import { ForecastUnitsService } from './forecast-units.service';

describe('ForecastUnitsService', () => {
  let service: ForecastUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
