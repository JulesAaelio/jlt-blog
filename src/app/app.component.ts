import {Component, OnInit} from '@angular/core';
import {OAuth2Service} from './auth/oauth2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private as: OAuth2Service) {

  }

  ngOnInit(): void {
    // OAuth2Service.initLogin('/');
  }
}
