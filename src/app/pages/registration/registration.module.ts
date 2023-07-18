import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { AppRegistrationComponent } from './app-registration/app-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppRegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class RegistrationModule {}
