import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherControllerModule } from './modules/weather-controller/weather-controller.module';

const weatherControllerModule = () => import('./modules/weather-controller/weather-controller.module').then(m => m.WeatherControllerModule);

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: "weather", loadChildren: weatherControllerModule },
  // { path: "", component: WeatherReportComponent },
  // { path: ":locationName", component: WeatherReportComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
