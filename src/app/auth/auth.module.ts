import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OAuth2Service} from './oauth2.service';
import {AuthEndpointComponent} from './auth-endpoint/auth-endpoint.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {UnauthorizedInterceptor} from './interceptors/unauthorized.interceptor';

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
    OAuth2Service,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true,
    },
  ],
  exports: [
    AuthEndpointComponent,
    AuthBaseComponent
  ]
})
export class AuthModule { }
