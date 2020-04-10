import { Injectable, OnInit } from '@angular/core';
import { AuthResponseData } from './auth.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyBfHSnFKE6YoOFUc3S_xqXNc1Ss--Vdejw ',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyBfHSnFKE6YoOFUc3S_xqXNc1Ss--Vdejw',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Login unsuccessful please try again';
    if (!errorRes.error || !errorRes.error.error.message) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'You could not be logged in';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'You could not be logged in';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exits';
        break;
      case 'INVALID_EMAIL':
        errorMessage = 'Please enter a valid email';
        break;
      default:
        break;
    }
    return throwError(errorMessage);
  }
}
