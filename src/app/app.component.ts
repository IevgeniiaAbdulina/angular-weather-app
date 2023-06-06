import { Component , OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Weather App';
  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"],
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"],
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"],
    },
    {
      name: "Pakistan",
      cities: ["Lahore", "Karachi", "Islamabad"],
    },
  ];

  countryControl: FormControl;
  cityControl: FormControl;

  cities$: Observable<string>;

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl =  new FormControl("");
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.router.navigate([value])
      });

    this.countryControl = new FormControl("");

    this.cities$ = this.countryControl.valueChanges.pipe(
      map((country ) => country.cities)
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
