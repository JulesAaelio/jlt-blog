import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeBaseComponent} from './resume-base/resume-base.component';
import {ResumeComponent} from './resume/resume.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ResumeCardComponent} from './resume-card/resume-card.component';
import {SkillBucketComponent} from './skill-bucket/skill-bucket.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [ResumeBaseComponent, ResumeComponent, ResumeCardComponent, SkillBucketComponent],
  exports: [
    ResumeBaseComponent
  ]
})
export class ResumeModule {
}
