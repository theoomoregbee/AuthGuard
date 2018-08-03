import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
  declarations: [HomeComponent, AdminComponent, LayoutComponent]
})
export class DashboardModule { }
