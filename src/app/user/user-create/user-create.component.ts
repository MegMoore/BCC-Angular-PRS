import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  use: User = new User();

constructor(
  private usesvc: UserService,
  private router: Router
){}

save(): void {
  this.usesvc.create(this.use).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigateByUrl("/use/list");
    },
    error: (err) => {
      console.error(err);
    }
  })
}
ngOnInit(): void {
  
}

}
