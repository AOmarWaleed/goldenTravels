import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewOfferComponent } from './add-new-offer/add-new-offer.component';

const routes: Routes = [
  { path: '', component: AddNewOfferComponent, title: 'اضافة عرض سعر' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOfferRoutingModule {}
