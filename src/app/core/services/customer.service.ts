import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constanst } from '../constants/cont';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _http: HttpClient) {}

  addCustomer(data: any) {
    return this._http.post(`${constanst.baseURL}`, data);
  }
}
