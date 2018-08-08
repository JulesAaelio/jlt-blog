import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OAuth2Service} from '../oauth2.service';

@Component({
  selector: 'app-auth-endpoint',
  templateUrl: './auth-endpoint.component.html',
  styleUrls: ['./auth-endpoint.component.css']
})
export class AuthEndpointComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private as: OAuth2Service) {
    this.ar.fragment.subscribe(fragment => {
      if (fragment) {
        this.as.login(fragment);
      }
    });
  }

  ngOnInit() {
  }

}
