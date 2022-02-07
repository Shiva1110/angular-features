import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], searchText: string): User[] {
    if (searchText.length) {
      return value.filter((user) =>
        user.profileName
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
      );
    }
    return value;
  }
}
