import {Experience} from './experience';
import {Formation} from './formation';
import {Person} from './Person';

export class Resume {
  name: string;
  title: string;
  headline: string;
  download: string;
  experiences: Experience[];
  formations: Formation[];
  person: Person;
}
