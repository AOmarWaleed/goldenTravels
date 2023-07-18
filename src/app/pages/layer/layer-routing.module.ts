import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayerComponent } from './layer/layer.component';

const routes: Routes = [
  {
    path: '',
    component: LayerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'addCustomer',
        loadChildren: () =>
          import('../add-customer/add-customer.module').then(
            (m) => m.AddCustomerModule
          ),
      },
      {
        path: 'addOffer',
        loadChildren: () =>
          import('../add-offer/add-offer.module').then((m) => m.AddOfferModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayerRoutingModule {}
