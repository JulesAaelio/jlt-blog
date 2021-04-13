import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SkillService} from '../skill.service';
import {Skill} from '../model/skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {

  public skill: Skill;
  constructor(private route: ActivatedRoute, private skillService: SkillService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const skillId = params.get('id');
      this.skillService.getSkill(Number(skillId)).subscribe((skill) => {
        this.skill = skill;
      });
    });
  }

}
