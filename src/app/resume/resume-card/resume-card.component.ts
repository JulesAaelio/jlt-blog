import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../model/experience';
import {Formation} from '../model/formation';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent implements OnInit {

  @Input() data;

  constructor() {
  }

  ngOnInit() {
  }

  getIllustrationAddress() {
    return this.data.image;
    // return environment.resume_rest_end_point + this.data.image;
  }

}
