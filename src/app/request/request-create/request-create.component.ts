import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  req: Request = new Request();
  use!: User[];

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private usesvc: UserService,
    private syssvc: SystemService
  ){}
  
  save(): void {
    this.reqsvc.create(this.req).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/req/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.usesvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.use = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
  
  }
