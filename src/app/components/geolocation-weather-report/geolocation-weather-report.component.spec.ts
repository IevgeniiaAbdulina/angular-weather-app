import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationWeatherReportComponent } from './geolocation-weather-report.component';

describe('GeolocationWeatherReportComponent', () => {
  let component: GeolocationWeatherReportComponent;
  let fixture: ComponentFixture<GeolocationWeatherReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeolocationWeatherReportComponent]
    });
    fixture = TestBed.createComponent(GeolocationWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
