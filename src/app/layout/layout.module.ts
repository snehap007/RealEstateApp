import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout.component';
import { CoreModule } from '../core/core.module';
import {RouterModule} from '@angular/router';
import { AboutUSComponent } from './about-us/about-us.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [LandingComponent, LayoutComponent, AboutUSComponent, PropertyDetailComponent]
})
export class LayoutModule { }
