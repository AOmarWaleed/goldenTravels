import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css'],
})
export class AppLoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _authS: AuthService) {
    this.loginForm = this.fb.group({
      emailOrUserName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('not-valid');
      return;
    }

    this._authS.login(this.loginForm.value).subscribe({
      next: (r) => console.log(r),
      error: (e) => console.log(e),
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }
}
