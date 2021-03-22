import {SkillCategory} from './skill_category';
import {Experience} from './experience';

export class Skill {
  id: number;
  name: string;
  skill_category: SkillCategory;
  experiences: Experience[];
  realisations: any[];
}
