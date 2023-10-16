import { Component } from '@angular/core';
import { User } from '../user/user.class';
import { UserService } from '../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  use!: User;

  constructor(
    private usesvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

    save(): void {
      let id = this.route.snapshot.params["id"];
      this.usesvc.remove(id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl("use/list");
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
          console.log(res)
          this.use = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

}
