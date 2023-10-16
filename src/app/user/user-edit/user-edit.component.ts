import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
 uses!: User;

constructor(
  private usesvc: UserService,
  private route: ActivatedRoute,
  private router: Router
){}
 
save(): void {
  this.usesvc.change(this.uses).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigateByUrl("/use/list")
    },
    error: (err) => {
      console.error(err);
    }
  })
}

ngOnInit(): void {
  let id = this.route.snapshot.params["id"];
  this.usesvc.get(id).subscribe({
    next: (res) => {
      console.log(res);
      this.uses = res;
    },
    error: (err) => {
      console.error(err);
    }
  })
}

}
