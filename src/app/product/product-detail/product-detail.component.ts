import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  prod!: Product;

  constructor(
    private prosvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

    save(): void {
      let id = this.route.snapshot.params["id"];
      this.prosvc.remove(id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl("prod/list");
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
          console.log(res)
          this.prod = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

}