import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './layout/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/realEstate/Home', pathMatch: 'full' },
  {
    path: 'realEstate', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: LandingComponent },
    ]
  },
  // {
  //   path: 'Layout', component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: '/Home', pathMatch: 'full' },
  //     { path: 'Home', component: LandingComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
