import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
