import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OAuth2Service} from './oauth2.service';
import {AuthEndpointComponent} from './auth-endpoint/auth-endpoint.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthEndpointComponent
  ],
  providers : [
    OAuth2Service
  ],
  exports: [
    AuthEndpointComponent
  ]
})
export class AuthModule { }
