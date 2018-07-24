import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {OAuth2Service} from '../oauth2.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private inj: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.inj.get(OAuth2Service).getToken() !== null) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.inj.get(OAuth2Service).getToken()}`
        }
      });
    }

    return next.handle(req);
  }
}
