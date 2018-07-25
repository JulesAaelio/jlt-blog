import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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
    BrowserModule,
    HttpClientModule,
    AuthModule,
    RoutingModule,
    BlogModule,
    ResumeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
