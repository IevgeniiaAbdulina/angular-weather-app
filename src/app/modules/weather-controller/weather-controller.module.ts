import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherControllerComponent } from './weather-controller.component';
import { SharedModule } from '../../shared/shared.module';
import { WeatherControllerRoutingModule } from './weather-controller-routing.module';



@NgModule({
  declarations: [
    WeatherControllerComponent,
  ],
  imports: [
    CommonModule,
    WeatherControllerRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class WeatherControllerModule { }
