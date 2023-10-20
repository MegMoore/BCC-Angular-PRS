import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/core/system.service';
@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  req!: Request;
  use!: User;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usesvc: UserService,
    private syssvc: SystemService
  ){}

    save(): void {
      let id = this.route.snapshot.params["id"];
      this.reqsvc.remove(id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl("req/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.reqsvc.get(id).subscribe({
        next: (res) => {
          console.log(res)
          this.req = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

}