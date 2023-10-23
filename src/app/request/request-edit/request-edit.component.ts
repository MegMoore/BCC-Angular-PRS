import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
  req!: Request;
  use!: User[];

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private usesvc: UserService
  ){}
   
  save(): void {
    this.reqsvc.change(this.req).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/req/list")
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
        console.log(res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.usesvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.use = res;
      },
      error: (err) => {
        console.error();
      }
    })
  }
  
  }
