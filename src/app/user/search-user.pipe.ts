import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

   //sorting users
   transform(uses: User[], substr: string = ""): User[] {
    if(substr === ""){
    return uses;
  }
    let selectedUsers: User[] = [];
    for(let u of uses) {
      if(
        u.username.toLowerCase().includes(substr.toLowerCase())
        || (u.firstname != null && u.firstname.toLowerCase().includes(substr.toLowerCase()))
        ) {
          selectedUsers.push(u);
        }
      }
      return selectedUsers;
    }
}