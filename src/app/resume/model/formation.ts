import {Experience} from './experience';

export class Formation {
  begin_date: string;
  end_date: string;
  degree: string;
  school: string;
  place: string;
  details: string;
  result: string;
  link: string;
  experiences: Experience[];
  formations: Formation[];
}
