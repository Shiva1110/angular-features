import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: User[]): User[] {
    if (value.length) {
      return value.sort((a, b) => {
        if (
          a.profileName.toLocaleLowerCase() > b.profileName.toLocaleLowerCase()
        ) {
          return 1;
        } else if (
          a.profileName.toLocaleLowerCase() < b.profileName.toLocaleLowerCase()
        ) {
          return -1;
        }
        return 0;
      });
    }
    return [];
  }
}
