import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {RoutingModule} from './routing/routing.module';
import {BlogModule} from './blog/blog.module';
import {ResumeModule} from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    AuthModule,
    RoutingModule,
    BlogModule,
    ResumeModule
  ],
})
export class AppModule {
}
