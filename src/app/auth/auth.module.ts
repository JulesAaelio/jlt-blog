import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OAuth2Service} from './oauth2.service';
import {AuthEndpointComponent} from './auth-endpoint/auth-endpoint.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AuthEndpointComponent,
    AuthBaseComponent,
  ],
  providers : [
    OAuth2Service
  ],
  exports: [
    AuthEndpointComponent,
    AuthBaseComponent
  ]
})
export class AuthModule { }
