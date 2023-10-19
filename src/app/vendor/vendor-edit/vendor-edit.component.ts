import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  vend!: Vendor;

  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}
   
  save(): void {
    this.vensvc.change(this.vend).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/vend/list")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vensvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.vend = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  }