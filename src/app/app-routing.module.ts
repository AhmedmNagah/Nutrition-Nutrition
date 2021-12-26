import { SummaryComponent } from './pages/summary/summary.component';
import { ResponceComponent } from './pages/responce/responce.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'responce', component: ResponceComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'Nutrition Analysis !', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
