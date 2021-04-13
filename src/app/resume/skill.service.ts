import { Injectable } from '@angular/core';
import {SkillGroup} from './model/skill-group';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Skill} from './model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkill(id: number) {
    return this.http.get<Skill>(environment.resume_rest_end_point + '/skill/' + id);
  }
}
