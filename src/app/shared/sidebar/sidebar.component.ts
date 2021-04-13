import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Person} from '../../resume/model/Person';
import {Resume} from '../../resume/model/resume';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  avatar_url = environment.rest_end_point + '/public/avatar.png';
  @Input() data: Person;
  @Input() resume: Resume;
  @Input() resumeMode = false;
  displayPhoneNumber = false;
  constructor() { }

  ngOnInit() {
  }

}
