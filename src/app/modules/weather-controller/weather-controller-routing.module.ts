import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherControllerComponent } from './weather-controller.component';

const routes: Routes = [{ path: "", component: WeatherControllerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherControllerRoutingModule { }
