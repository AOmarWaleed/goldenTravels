import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [AppHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
