import { Injectable } from '@angular/core';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import {Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OAuth2Service {
  user;
  constructor(private http: HttpClient) { }

  static splitFragment(fragment: string) {
    const unsplitedparams = fragment.split('&');
    const params = [];
    for (let i = 0; i < unsplitedparams.length; i++) {
      const splitedParam = unsplitedparams[i].split('=');
      params[splitedParam[0]] = splitedParam[1];
    }
    return params;
  }

  static initLogin(redirectTo: string) {
    window.localStorage.setItem('redirectTo', redirectTo);
    window.location.href = environment.auth_end_point + '/oauth/v2/auth' +
      '?response_type=token' +
      '&client_id=' + environment.app_id +
      '&redirect_uri=' + window.location.origin + '/auth';
  }

  getToken() {
    const expddate = window.localStorage.getItem('jl_exp_date');
    if (expddate && new Date(expddate).getTime() < new Date().getTime()) {
      this.logoff();
    }
    return window.localStorage.getItem('jl_token');
  }

  login(fragment)  {
    const params = OAuth2Service.splitFragment(fragment);
    const expdate = new Date();
    if (params['access_token'] !== undefined && params['expires_in'] !== undefined) {
      expdate.setSeconds(expdate.getSeconds() + Number.parseInt(params['expires_in']));
      window.localStorage.setItem('jl_token', params['access_token']);
      window.localStorage.setItem('jl_exp_date', expdate.toISOString());
    }
    let redirectTo = window.localStorage.getItem('redirectTo');

    if (!redirectTo) {
      redirectTo = '/';
    }
    this.getUser().subscribe((r) => {
      this.user = r;
      // not using router.navigate to force reload.
      window.location.assign(window.location.origin + redirectTo);
    });
  }

  logoff() {
    localStorage.removeItem('jl_token');
    localStorage.removeItem('jl_exp_date');
    localStorage.removeItem('redirectTo');
    this.user = null;
  }

  isAuthenticated() {
    return this.getToken() != null;
  }

  getUser(): Observable<User> {
    if (this.user) {
      return of(this.user);
    } else {
        this.http.get<User>(environment.rest_end_point + '/user/me').subscribe(r => {
          this.user = r;
          return this.user;
        });
    }
  }
}
