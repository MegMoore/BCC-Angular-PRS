import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';

import { Request } from '../request.class';


@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent {
  req!: Request;
  

  constructor(
    private syssvc: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private reqlsvc: RequestlineService,
    private router: Router
    
    
  ){}
  
 
 

 
  save(): void {
    this.reqsvc.approved(this.req.id, this.req).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("req/rev/list");
      },
      error: (err) => {
        console.error(err);
      }
      
    })
  }
  rejected(): void {
    this.reqsvc.rejected(this.req.id, this.req).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("req/rev/list");
      },
      error: (err) => {
        console.error(err);
      }
      
    })
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.req = res;
      }
    })
  }

  ngOnInit(): void {
    this.refresh();
  }




}
