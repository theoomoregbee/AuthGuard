import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <h1>Dashboard Layout</h1>
    <p>
      <a routerLink="home" >Home</a> |
      <a routerLink="admin"> Admin </a> |
      <button (click)="logout()"> Logout</button>
    </p>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}
