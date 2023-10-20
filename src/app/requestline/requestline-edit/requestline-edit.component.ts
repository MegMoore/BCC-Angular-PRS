import { Component } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent {
  reql!: RequestLine;
  prods!: Product[];

  constructor(
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private prosvc: ProductService
  ){}
   
  save(): void {
    this.reqlsvc.change(this.reql).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl(`/req/lines/${this.reql.requestId}`)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  ngOnInit(): void {
    this.prosvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.prods = res;
      },
      error: (err) => {
        console.error();
      }
    })
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