import { Component } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent {
  pageTitle = "Review List";
  reqs!: Request[];
  locale: string = 'en';
  substr: string = "";
  
  sortAsc: boolean = true;
  sortRequest(col: string): void {
    
      this.sortAsc = !this.sortAsc;
      this.sortAsc;
  }

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService, 
    private route: ActivatedRoute,
    private router: Router,
    private reqlsvc: RequestlineService
  ){}

  

 
  ngOnInit(): void {
    if(this.syssvc.loggedInUser === null){
      this.router.navigateByUrl("/use/login");
    }
    let userId = this.syssvc.loggedInUser?.id;
    if(typeof userId === "undefined"){
      userId = 0;
    }
    this.reqsvc.requests(userId).subscribe({
      next: (res) => {
        console.log(res);
        this.reqs = res as Request[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}

