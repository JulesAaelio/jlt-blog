import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routes as authRoutes} from '../auth/auth.routes';
import {routes as blogAdminRoutes} from '../blog/blog-admin.routes';
import {routes as blogRoutes} from '../blog/blog-usage.routes';
import {routes as resumeRoutes} from '../resume/resume.routes';
import {AuthBaseComponent} from '../auth/auth-base/auth-base.component';
import {BlogBaseComponent} from '../blog/blog-base/blog-base.component';
import {AuthenticatedGuard} from '../auth/guards/authenticated.guard';
import {ResumeBaseComponent} from '../resume/resume-base/resume-base.component';

export const routes: Routes = [
  {path: '', redirectTo: 'resume', pathMatch: 'full'},
  {path: 'auth', component: AuthBaseComponent, children: authRoutes},
  {path: 'blog', component: BlogBaseComponent, children: blogRoutes},
  {path: 'blog/admin', component: BlogBaseComponent, children: blogAdminRoutes, canActivate: [AuthenticatedGuard]},
  {path: 'resume', component: ResumeBaseComponent, children: resumeRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
