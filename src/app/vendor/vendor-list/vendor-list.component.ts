import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle = "Vendor List";
  vends!: Vendor[];
  locale: string = 'en';
  substr: string = "";
  sortCol: string = "name";
  sortAsc: boolean = true;
  sortVendor(col: string): void {
    if(col === this.sortCol){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }

  constructor(
    private vensvc: VendorService
  ){}

  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vends = res as Vendor[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}


