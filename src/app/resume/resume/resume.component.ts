import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {ResumeService} from '../resume.service';
import {environment} from '../../../environments/environment';
import {Resume} from '../model/resume';
import {SkillGroup} from '../model/skill-group';
// import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
// import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll-core';
import {Skill} from '../model/skill';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume = new Resume();
  groupedSkills = {};

  constructor(private resumeService: ResumeService,
              @Inject(PLATFORM_ID) private platformId: string, private meta: Meta,
              private title: Title, private viewPortScroller: ViewportScroller) {
  }

  ngOnInit() {
    this.resumeService.getResume(environment.default_resume).subscribe(resume => {
      this.resume = resume;
      this.resume.experiences = this.resume.experiences.sort((a, b) => {
        if (new Date(a.begin_date) === new Date(b.begin_date)) { return 0; }
        return new Date(a.begin_date) < new Date(b.begin_date) ? 1 : -1;
      });
      this.resume.skills.forEach((skill: Skill) => {
        if (this.groupedSkills[skill.skill_category.name]) {
          this.groupedSkills[skill.skill_category.name].push(skill);
        } else {
          this.groupedSkills[skill.skill_category.name] = [skill];
        }
      });

      this.meta.addTag({name: 'author', content: this.resume.name});
      this.meta.addTag({property: 'og:image', content: this.getIllustrationAddress()});
      this.meta.addTag({property: 'og:title', content: `${this.resume.name} | ${this.resume.title}`});
      this.meta.addTag({property: 'og:type', content: 'website'});
      this.title.setTitle(`${this.resume.name} | ${this.resume.headline}`);
      this.meta.addTag({property: 'og:description', content: `${this.resume.person.bio}`});
    });
  }

  scrollDown(event) {
    event.preventDefault();
    this.viewPortScroller.scrollToAnchor('experience');
  }

  getDocumentURL() {
    return environment.resume_rest_end_point + '/' + this.resume.download;
  }

  getIllustrationAddress() {
    return environment.resume_rest_end_point + '/image/banner.png';
  }
}
