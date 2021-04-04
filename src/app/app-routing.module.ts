import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastHomeComponent } from './components/forecast-home/forecast-home.component';

const routes: Routes = [
  { path: 'home', component: ForecastHomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
