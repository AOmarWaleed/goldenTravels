import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-new-offer',
  templateUrl: './add-new-offer.component.html',
  styleUrls: ['./add-new-offer.component.css'],
})
export class AddNewOfferComponent {
  accordianObj: any = {
    internationalFlight: false,
    innerFlight: false,
    hotels: false,
    tours: false,
    carRent: false,
    internationalLicense: false,
    visas: false,
    otherServices: false,
  };
  constructor(private location: Location) {
    this.nextDate = new Date(this.testDate);
    this.nextDate.setDate(this.testDate.getDate() + 3);
  }

  fallBack() {
    this.location.back();
  }

  //

  toggleAccor(parent: HTMLElement) {
    const accordItem = parent.dataset['desc'];

    const checked = (<HTMLInputElement>(
      parent.querySelector('input[type="checkbox"]')
    ))?.checked;

    if (checked) {
      parent.style.backgroundColor = '#b48529';
      this.accordianObj[accordItem ? accordItem : ''] = true;
    } else {
      this.accordianObj[accordItem ? accordItem : ''] = false;
      parent.style.backgroundColor = '';
    }
  }

  // for test
  date = new FormControl(new Date());
  testDate = new Date();
  nextDate;

  model = 'السعوديه';
  list = [
    'السعوديه',
    'مصر',
    'الجزائر',
    'المغرب',
    'تونس',
    'ليبيا',
    'قطر',
    'الكويت',
    'السعوديه',
  ];
}
