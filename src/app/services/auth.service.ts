import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router) { }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }

  loginAdmin(): void {
    localStorage.setItem('token', `ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKUGJteHBibVVnU2xkVUlFSjFhV3hrWlhKMGFHVnZJaXdpYVdGMElqb3hOVE15T1RBME1UWXdMQ0psZUhBaU9qRTFOalEwTkRBeE5qQXNJbUYxWkNJNkluZDNkeTVsZUdGdGNHeGxMbU52YlNJc0luTjFZaUk2SW5Sb1pXODBkVUI1YldGcGJDNWpiMjBpTENKSGFYWmxiazVoYldVaU9pSktiMmh1Ym5raUxDSlRkWEp1WVcxbElqb2lVbTlqYTJWMElpd2lSVzFoYVd3aU9pSnFjbTlqYTJWMFFHVjRZVzF3YkdVdVkyOXRJaXdpVW05c1pTSTZJbEJ5YjJwbFkzUWdRV1J0YVc1cGMzUnlZWFJ2Y2lKOS55WFd5bmJLaVN1Q25LbU5lN1BZZVZfajRhdnBTaE45bVVrYXExczd1cmhz`);

    this._router.navigate(['/dashboard']);
  }

  login(): void {
    localStorage.setItem('token', `ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKUGJteHBibVVnU2xkVUlFSjFhV3hrWlhKMGFHVnZJaXdpYVdGMElqb3hOVE15T1RBME1UWXdMQ0psZUhBaU9qRTFOalEwTkRBeE5qQXNJbUYxWkNJNkluZDNkeTVsZUdGdGNHeGxMbU52YlNJc0luTjFZaUk2SW5Sb1pXODBkVUI1YldGcGJDNWpiMjBpTENKSGFYWmxiazVoYldVaU9pSktiMmh1Ym5raUxDSlRkWEp1WVcxbElqb2lVbTlqYTJWMElpd2lSVzFoYVd3aU9pSnFjbTlqYTJWMFFHVjRZVzF3YkdVdVkyOXRJaXdpVW05c1pTSTZJbEJ5YjJwbFkzUWdRV1J0YVc1cGMzUnlZWFJ2Y2lKOS55WFd5bmJLaVN1Q25LbU5lN1BZZVZfajRhdnBTaE45bVVrYXExczd1cmhz`);

    this._router.navigate(['/dashboard']);
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    this._router.navigate(['/login']);
  }
}
