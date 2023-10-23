import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-detail',
  templateUrl: './requestline-detail.component.html',
  styleUrls: ['./requestline-detail.component.css']
})
export class RequestlineDetailComponent {
  req!: Request;
  reql!: RequestLine;
  prod!: Product;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private reqlsvc: RequestlineService
  ){}
   
  
  
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.reql = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  }
