import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  isLoading: boolean = false;
  isSubmit: boolean = false;
  addCustomerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customS: CustomerService,
    private location: Location
  ) {
    this.addCustomerForm = fb.group({
      firstName: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      idPoos: ['', [Validators.required]],
      clientMembership: ['', [Validators.required]],
      employerName: ['', [Validators.required]],
    });
  }

  get employerName() {
    return this.addCustomerForm.get('employerName');
  }
  get familyName() {
    return this.addCustomerForm.get('familyName');
  }
  get phoneNumber() {
    return this.addCustomerForm.get('phoneNumber');
  }
  get idPoos() {
    return this.addCustomerForm.get('idPoos');
  }
  get clientMembership() {
    return this.addCustomerForm.get('clientMembership');
  }
  get firstName() {
    return this.addCustomerForm.get('firstName');
  }
  fallBack() {
    this.location.back();
  }

  addCustomer() {
    this.isSubmit = true;
    if (this.addCustomerForm.invalid) {
      console.log('invalid');
      return;
    }
    this.isLoading = true;
    this.customS.addCustomer(this.addCustomerForm.value).subscribe({
      next: () => {},
      error: () => {},
    });
    console.log('valid');
  }
}
