import { Component , OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Weather App';

  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  cityControl: FormControl = new FormControl("");;


  constructor(private router: Router) {}

  ngOnInit() {
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value])
    })
  }

  ngOnDestroy(): void {

  }
}
