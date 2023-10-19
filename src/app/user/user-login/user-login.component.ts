import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  use = new User();
  message = "";

  constructor(
    private usesvc: UserService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  login(): void {
    this.syssvc.loggedInUser = null;
    this.usesvc.login(this.use.username, this.use.password).subscribe({
      next: (res) => {
        console.debug(res);
        this.syssvc.loggedInUser = res;
        this.router.navigateByUrl("/req/list");
      },
      error: (err) => {
        console.log(err);
        if(err.status === 404){
          this.message = "Not Found";
        } else {
          console.error(err);
        }
      }
    })
  }

}
