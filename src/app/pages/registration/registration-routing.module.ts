import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRegistrationComponent } from './app-registration/app-registration.component';

const routes: Routes = [
  { path: '', component: AppRegistrationComponent, title: 'اضافة حساب' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
