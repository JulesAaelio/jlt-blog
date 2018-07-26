import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css'],
})
export class ResumeCardComponent implements OnInit {

  @Input() data;
  @HostBinding('class') hostclass = 'col s12 m4 resume-card';
  constructor() {
  }

  ngOnInit() {
  }

  getIllustrationAddress() {
    // return this.data.image;
    return environment.resume_rest_end_point + '/' + this.data.image;
  }

}