import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  pageTitle = "User List";
  uses!: User[];
  locale: string = 'en';
  substr: string = "";
  sortCol: string = "username";
  sortAsc: boolean = true;
  sortUser(col: string): void {
    if(col === this.sortCol){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }

  constructor(
    private usesvc: UserService
  ){}

  ngOnInit(): void {
    this.usesvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.uses = res as User[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
