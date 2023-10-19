import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  prod!: Product;

  constructor(
    private prosvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}
   
  save(): void {
    this.prosvc.change(this.prod).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/prod/list")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prosvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  }