import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../resume.service';
import {environment} from '../../../environments/environment';
import {Resume} from '../model/resume';
import {SkillGroup} from '../model/skill-group';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume = new Resume();
  skills: SkillGroup[] = [];
  sections;
  currentSection;
  deltaSum = 0;

  constructor(private resumeService: ResumeService, private pageScroll: PageScrollService) {
  }

  ngOnInit() {
    this.resumeService.getResume(environment.default_resume).subscribe(resume => {
      this.resume = resume;
    });
    this.resumeService.getSkills(environment.default_resume).subscribe(skills => {
      this.skills = skills;
    });

    this.sections = document.querySelectorAll('section, #sidebar');
    this.findCurrentSection();
    console.log('init');
  }

  onScroll(event) {
    console.log(this.currentSection);
    this.deltaSum += event.deltaY;
    if (Math.abs(this.deltaSum) >= Math.abs(4 * event.deltaY) && window.innerWidth > 601) {
      let target = null;
      if (event.deltaY < 0 && this.currentSection > 0) {
        target = this.currentSection - 1;
      } else if (event.deltaY > 0 && this.currentSection < this.sections.length) {
        target = this.currentSection + 1;
      }
      if (target !== undefined && target !== null) {

        const pageScrollInstance = PageScrollInstance.newInstance({
          document: document,
          scrollTarget: '#' + this.sections[target].id,
          pageScrollInterruptible: false,
        });
        this.pageScroll.start(pageScrollInstance);
        this.currentSection = target;
        this.deltaSum = 0;
      }

    }
  }

  findCurrentSection() {
    this.sections.forEach((o, i) => {
      if (location.hash) {
        console.log(location.hash);
        if ('#' + o.id === location.hash) {
          this.currentSection = i;
        }
      } else {
        if (o.offsetTop === window.pageYOffset) {
          this.currentSection = i;
        }
      }
    });
    console.log(this.currentSection);
    if (!this.currentSection) {
      this.currentSection = 0;
    }

  }
}
