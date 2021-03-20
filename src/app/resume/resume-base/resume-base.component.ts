import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ResumeService} from '../resume.service';
import {Resume} from '../model/resume';

@Component({
  selector: 'app-resume-base',
  templateUrl: './resume-base.component.html',
  styleUrls: ['./resume-base.component.css']
})
export class ResumeBaseComponent implements OnInit {

  public resume: Resume;
  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resumeService.getResume(environment.default_resume).subscribe(resume => {
      this.resume = resume;
    });
  }

}
