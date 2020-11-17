import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeBaseComponent} from './resume-base/resume-base.component';
import {ResumeComponent} from './resume/resume.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ResumeCardComponent} from './resume-card/resume-card.component';
import {SkillBucketComponent} from './skill-bucket/skill-bucket.component';
import {NavigationArrowComponent} from './navigation-arrow/navigation-arrow.component';
// import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // ScrollToModule.forRoot(),
    NgxPageScrollModule
  ],
  declarations: [ResumeBaseComponent,
    ResumeComponent,
    ResumeCardComponent,
    SkillBucketComponent,
    NavigationArrowComponent,

  ],
  exports: [
    ResumeBaseComponent
  ]
})
export class ResumeModule {
}
