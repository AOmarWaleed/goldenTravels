import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css'],
})
export class AppRegistrationComponent {
  isLoading: boolean = false;
  clicked: boolean = false;
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private _authS: AuthService) {
    this.signupForm = fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
      },

      { validator: this.ConfirmedValidator('password', 'rePassword') }
    );
  }

  signup() {
    this.clicked = true;
    if (!this.signupForm.valid) {
      console.log('in-valid');
      return;
    }
    this.isLoading = true;
    const data = {
      userName: this.userName?.value,
      password: this.password?.value,
      email: this.email?.value,
    };
    this._authS.signup(data).subscribe({
      next: (r) => {
        this.isLoading = false;
        console.log(r);
      },
      error: (e) => {
        this.isLoading = false;
        console.log(e);
      },
    });
  }

  get userName() {
    return this.signupForm.get('userName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get rePassword() {
    return this.signupForm.get('rePassword');
  }

  // 88888
  // 88888
  // 88888
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      // console.log(control, matchingControl);
      if (
        matchingControl.errors &&
        !matchingControl?.getError('confirmedValidator')
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
