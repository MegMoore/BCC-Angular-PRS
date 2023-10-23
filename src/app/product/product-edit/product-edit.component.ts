import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  prod!: Product;
  vens!: Vendor[];

  constructor(
    private prosvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vensvc: VendorService
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
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.vens = res;
      },
      error: (err) => {
        console.error();
      }
    })
  }
  }