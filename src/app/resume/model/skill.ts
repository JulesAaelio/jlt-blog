import {SkillCategory} from './skill_category';
import {Experience} from './experience';
import {Realisation} from './realisation';

export class Skill {
  id: number;
  name: string;
  skill_category: SkillCategory;
  experiences: Experience[];
  realisations: Realisation[];
  description: string;
}
