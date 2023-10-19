import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle = "Request List";
  reqs!: Request[];
  locale: string = 'en';
  substr: string = "";
  sortCol: string = "status";
  sortAsc: boolean = true;
  sortRequest(col: string): void {
    if(col === this.sortCol){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }

  constructor(
    private reqsvc: RequestService
  ){}

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
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
