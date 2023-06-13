import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const weatherControllerModule = () => import('./modules/weather-controller/weather-controller.module').then(m => m.WeatherControllerModule);

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: "weather", loadChildren: weatherControllerModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
