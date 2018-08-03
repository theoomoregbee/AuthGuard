import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      {
        path: 'admin', component: AdminComponent,
        data: {role: 'Admin'},
        canActivate: [RoleGuard]
      }
    ]
  }
];
