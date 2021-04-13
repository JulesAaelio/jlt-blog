import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {SkillGroup} from '../model/skill-group';
import {Skill} from '../model/skill';

@Component({
  selector: 'app-skill-bucket',
  templateUrl: './skill-bucket.component.html',
  styleUrls: ['./skill-bucket.component.scss']
})
export class SkillBucketComponent implements OnInit {

  @Input() skills: Skill[];
  @Input() name: String;

  constructor() {
  }

  ngOnInit() {
  }

}
