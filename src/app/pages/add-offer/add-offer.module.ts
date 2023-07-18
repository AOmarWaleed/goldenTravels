import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOfferRoutingModule } from './add-offer-routing.module';
import { AddNewOfferComponent } from './add-new-offer/add-new-offer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddNewOfferComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AddOfferRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AddOfferModule {}
