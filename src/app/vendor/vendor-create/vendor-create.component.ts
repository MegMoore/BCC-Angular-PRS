import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  vend: Vendor = new Vendor();

  constructor(
    private vensvc: VendorService,
    private router: Router
  ){}
  
  save(): void {
    this.vensvc.create(this.vend).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/vend/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    
  }
  
  }

