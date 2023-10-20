import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestLine} from 'src/app/requestline/requestline.class';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {
  req!: Request;
  

  constructor(
    private syssvc: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private reqlsvc: RequestlineService,
    private usesvc: UserService
  ){}

  saveid: number = 0;
  remove(id: number): void {
    this.showverify = !this.showverify;
    this.saveid = id;
  }

  showverify: boolean = false;
  verifyremove(id: number): void {
    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.log("deleted");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
      
    })
  }
  review() : void {
    this.reqsvc.review(this.req).subscribe({
      next: (res) => {
        console.debug("Status set as REVIEW");
        this.refresh();
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
