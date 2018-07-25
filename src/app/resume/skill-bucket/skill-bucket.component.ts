import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {SkillGroup} from '../model/skill-group';

@Component({
  selector: 'app-skill-bucket',
  templateUrl: './skill-bucket.component.html',
  styleUrls: ['./skill-bucket.component.css']
})
export class SkillBucketComponent implements OnInit {

  @Input() group: SkillGroup;
  @HostBinding('class') hostclass = 'col s12 m6 l3 skill-bucket';

  constructor() {
  }

  ngOnInit() {
  }

}
