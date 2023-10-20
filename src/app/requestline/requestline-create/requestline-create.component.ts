import { Component } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { ProductService } from 'src/app/product/product.service';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {

    reql: RequestLine = new RequestLine;
    prod?: Product[];

  constructor(
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private prosvc: ProductService,
    private reqlsvc: RequestlineService,
    private router: Router

  ){}

  save(): void {
    this.reql.productId = +this.reql.productId;
    console.debug("RequestLine B4:", this.reql);
    this.reqlsvc.create(this.reql).subscribe({
      next: (res) => {
        console.debug("Created");
        this.router.navigateByUrl(`/req/lines/${this.reql.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.reql.requestId = +this.route.snapshot.params["rid"];

    this.prosvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.prod = res;
      },
      error: (err) => {
        console.error();
      }
    })
  } 



}
