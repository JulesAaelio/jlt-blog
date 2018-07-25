import {Experience} from './experience';
import {Formation} from './formation';

export class Resume {
  name: string;
  job: string;
  headline: string;
  mail: string;
  phone: string;
  picture: string;
  linkedin: string;
  website: string;
  github: string;
  twitter: string;
  bio: string;
  experiences: Experience[];
  formations: Formation[];
}
