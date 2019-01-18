import { WINDOW } from '@ng-toolkit/universal';
import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {ResumeService} from '../resume.service';
import {environment} from '../../../environments/environment';
import {Resume} from '../model/resume';
import {SkillGroup} from '../model/skill-group';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';

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


  constructor(@Inject(WINDOW) private window: Window, private resumeService: ResumeService, private pageScroll: PageScrollService,
              @Inject(PLATFORM_ID) private platformId: string, private meta: Meta, private title: Title) {
  }

  ngOnInit() {
    this.resumeService.getResume(environment.default_resume).subscribe(resume => {
      this.resume = resume;

      this.meta.addTag({name: 'author', content: this.resume.name});
      this.meta.addTag({property: 'og:image', content: this.getIllustrationAddress()});
      this.meta.addTag({property: 'og:title', content: `${this.resume.name} | ${this.resume.job}`});
      this.meta.addTag({property: 'og:type', content: 'website'});
      this.title.setTitle(`${this.resume.name} | ${this.resume.job}`);
      this.meta.addTag({property: 'og:description', content: `${this.resume.bio}`});
    });
    this.resumeService.getSkills(environment.default_resume).subscribe(skills => {
      this.skills = skills;
    });

    if(isPlatformBrowser(this.platformId)) {
      this.sections = this.window.document.querySelectorAll('section, #sidebar');
      this.findCurrentSection();
    }
  }

  onScroll(event) {
    // console.log(this.currentSection);
    // this.deltaSum += event.deltaY;
    // if (Math.abs(this.deltaSum) >= Math.abs(4 * event.deltaY) && window.innerWidth > 601) {
    //   let target = null;
    //   if (event.deltaY < 0 && this.currentSection > 0) {
    //     target = this.currentSection - 1;
    //   } else if (event.deltaY > 0 && this.currentSection < this.sections.length) {
    //     target = this.currentSection + 1;
    //   }
    //   if (target !== undefined && target !== null) {
    //
    //     const pageScrollInstance = PageScrollInstance.newInstance({
    //       document: document,
    //       scrollTarget: '#' + this.sections[target].id,
    //       pageScrollInterruptible: false,
    //     });
    //     this.pageScroll.start(pageScrollInstance);
    //     this.currentSection = target;
    //     this.deltaSum = 0;
    //   }
    //
    // }
  }

  findCurrentSection() {
    this.sections.forEach((o, i) => {
      if (location.hash) {
        console.log(location.hash);
        if ('#' + o.id === location.hash) {
          this.currentSection = i;
        }
      } else {
        if (o.offsetTop === this.window.pageYOffset) {
          this.currentSection = i;
        }
      }
    });
    console.log(this.currentSection);
    if (!this.currentSection) {
      this.currentSection = 0;
    }
  }

  scrollDown(event) {
    event.preventDefault();
      const pageScrollInstance = PageScrollInstance.newInstance({
        document: this.window.document,
        scrollTarget: '#experience',
        pageScrollInterruptible: false,
      });
      this.pageScroll.start(pageScrollInstance);
  }

  getDocumentURL() {
    return environment.resume_rest_end_point + '/' + this.resume.document;
  }

  getIllustrationAddress() {
    return environment.resume_rest_end_point + '/image/banner.png';
  }
}
