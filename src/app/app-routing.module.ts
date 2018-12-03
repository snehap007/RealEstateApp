import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './layout/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUSComponent } from './layout/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/realEstate/Home', pathMatch: 'full' },
  {
    path: 'realEstate', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: LandingComponent },
      { path: 'AboutUS', component: AboutUSComponent }
    ]
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
