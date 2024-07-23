import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    console.log(email, password);
    return this.http.post<any>(`http://localhost:3000/login`, {
      email,
      password,
    });
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/register`, {
      firstname,
      lastname,
      email,
      password,
    });
  }
}
