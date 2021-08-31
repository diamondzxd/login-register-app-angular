import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http.post('http://127.0.0.1:4200/register', {
      email: email,
      password: password,
    });
  }

  login(email: string, password: string) {
    return this.http.post('http://127.0.0.1:4200/login', {
      email: email,
      password: password,
    });
  }
}
