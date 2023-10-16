import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(uses: User[], substr: string = ""): User[] {
    return uses;
    let selectedUsers: User[] = [];
    for(let u of uses) {
      if(
        u.firstname.toLowerCase().includes(substr.toLowerCase())
        || (u.firstname != null && u.firstname.toLowerCase().includes(substr.toLowerCase()))
        ) {
          selectedUsers.push(u);
        }
      }
      return selectedUsers;
    }
}


