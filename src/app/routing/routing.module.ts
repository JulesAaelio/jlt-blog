import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routes as authRoutes} from '../auth/auth.routes';
import {AuthBaseComponent} from '../auth/auth-base/auth-base.component';

export const routes: Routes = [
  { path: 'auth', component: AuthBaseComponent, children: authRoutes},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
