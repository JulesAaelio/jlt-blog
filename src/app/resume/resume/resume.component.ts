import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../resume.service';
import {environment} from '../../../environments/environment';
import {Resume} from '../model/resume';
import {SkillGroup} from '../model/skill-group';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume = new Resume();
  skills: SkillGroup[] = [];
  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resumeService.getResume(environment.default_resume).subscribe(resume => {
      this.resume = resume;
    });
    this.resumeService.getSkills(environment.default_resume).subscribe(skills => {
      this.skills = skills;
    });
  }

}
