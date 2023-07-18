import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sideNavbarComponent } from './components/sideNavbar/sideNavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
//this module it should be shared across the whole project, so we should import it in app module
// so like in services we will have auth.serv,
// dont forget to provide the interceptor ======?-

@NgModule({
  declarations: [sideNavbarComponent, NavbarComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [sideNavbarComponent, HttpClientModule, NavbarComponent],
})
export class CoreModule {}
