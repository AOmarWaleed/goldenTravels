import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constanst } from '../constants/cont';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private _http: HttpClient) {}

  signup(data: any) {
    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    // formData.append('email', data.email);
    // formData.append('password', data.password);
    // formData.append('userName', data.userName);

    return this._http.post(`${constanst.baseURL}/api/Auth/Register`, formData);
  }
  login(data: any) {
    return this._http.post(`${constanst.baseURL}/api/Auth/Login`, data, {
      headers: { 'x-api-key': 'ByYM000OLlMwG6VbVb1OH7Xzyr7gEuw1qvUC5dcGt3SNM' },
    });
  }
}
