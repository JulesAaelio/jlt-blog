import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Resume} from './model/resume';
import {SkillGroup} from './model/skill-group';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) {
  }

  getResume(id) {
    return this.http.get<Resume>(environment.resume_rest_end_point + '/resume/' + id);
  }

  getSkills(label: string) {
    return this.http.get<SkillGroup[]>(environment.resume_rest_end_point + '/cvs/' + label + '/skills');
  }
}
