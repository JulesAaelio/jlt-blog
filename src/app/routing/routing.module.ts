import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routes as authRoutes} from '../auth/auth.routes';
import {routes as blogAdminRoutes} from '../blog/blog-admin.routes';
import {routes as blogRoutes} from '../blog/blog-usage.routes';
import {AuthBaseComponent} from '../auth/auth-base/auth-base.component';
import {BlogBaseComponent} from '../blog/blog-base/blog-base.component';
import {AuthenticatedGuard} from '../auth/guards/authenticated.guard';

export const routes: Routes = [
  { path: 'auth', component: AuthBaseComponent, children: authRoutes},
  { path: '', component: BlogBaseComponent, children: blogRoutes},
  {path: 'admin', component: BlogBaseComponent, children: blogAdminRoutes, canActivate: [AuthenticatedGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
