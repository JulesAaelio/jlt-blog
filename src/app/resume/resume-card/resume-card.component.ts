import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css'],
})
export class ResumeCardComponent implements OnInit {

  @Input() data;
  @HostBinding('class') hostclass = 'col s12 m6 l4 resume-card';
  constructor() {
  }

  ngOnInit() {
  }

}
