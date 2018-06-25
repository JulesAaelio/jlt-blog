import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OAuth2Service} from './auth/oauth2.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthEndpointComponent } from './auth/auth-endpoint/auth-endpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthEndpointComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    OAuth2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
