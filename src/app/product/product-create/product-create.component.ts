import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  prod: Product = new Product();
  vens!: Vendor[];

  constructor(
    private prosvc: ProductService,
    private router: Router,
    private vensvc: VendorService,
    private syssvc: SystemService
  ){}
  
  save(): void {
    this.prosvc.create(this.prod).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/prod/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vens = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
  
  }