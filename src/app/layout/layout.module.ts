import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout.component';
import { CoreModule } from '../core/core.module';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [LandingComponent, LayoutComponent]
})
export class LayoutModule { }
