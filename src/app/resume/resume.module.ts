import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeBaseComponent} from './resume-base/resume-base.component';
import {ResumeComponent} from './resume/resume.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ResumeCardComponent} from './resume-card/resume-card.component';
import {SkillBucketComponent} from './skill-bucket/skill-bucket.component';
import {NavigationArrowComponent} from './navigation-arrow/navigation-arrow.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { RealisationCardComponent } from './realisation-card/realisation-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxPageScrollModule
  ],
  declarations: [ResumeBaseComponent,
    ResumeComponent,
    ResumeCardComponent,
    SkillBucketComponent,
    NavigationArrowComponent,
    SkillDetailComponent,
    RealisationCardComponent,

  ],
  exports: [
    ResumeBaseComponent
  ]
})
export class ResumeModule {
}
