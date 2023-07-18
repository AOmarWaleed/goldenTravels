import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AppLoginComponent],
  imports: [
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class LoginModule {}
