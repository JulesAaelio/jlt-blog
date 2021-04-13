import {Experience} from './experience';
import {Education} from './education';
import {Person} from './Person';
import {Skill} from './skill';

export class Resume {
  name: string;
  title: string;
  headline: string;
  download: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  person: Person;
}
