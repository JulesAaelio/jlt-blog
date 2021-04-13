import {Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {SkillDetailComponent} from './skill-detail/skill-detail.component';

export const routes: Routes = [
  {path: '', component: ResumeComponent},
  {path: 'skill/:id', component: SkillDetailComponent},
];
