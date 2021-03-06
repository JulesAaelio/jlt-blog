import {Experience} from './experience';
import {Education} from './education';
import {Person} from './Person';

export class Resume {
  name: string;
  title: string;
  headline: string;
  download: string;
  experiences: Experience[];
  educations: Education[];
  person: Person;
}
