import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCustomerRoutingModule } from './add-customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';

@NgModule({
  declarations: [AddCustomerComponent],
  imports: [CommonModule, AddCustomerRoutingModule, ReactiveFormsModule],
  providers: [CustomerService],
})
export class AddCustomerModule {}
