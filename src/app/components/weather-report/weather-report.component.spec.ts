import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportComponent } from './weather-report.component';

describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportComponent]
    });
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
