import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.match('^http|https')) {
      return value;
    }
    return `${environment.rest_end_point}/${value}`;
  }

}
