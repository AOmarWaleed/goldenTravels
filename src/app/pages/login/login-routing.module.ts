import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent, title: 'تسجيل الدخول' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
