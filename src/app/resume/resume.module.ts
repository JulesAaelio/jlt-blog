import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumeBaseComponent} from './resume-base/resume-base.component';
import {ResumeComponent} from './resume/resume.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [ResumeBaseComponent, ResumeComponent]
})
export class ResumeModule {
}
