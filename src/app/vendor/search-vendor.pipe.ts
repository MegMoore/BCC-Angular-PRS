import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  //sorting vendors
  transform(vends: Vendor[], substr: string = ""): Vendor[] {
    if(substr === ""){
    return vends;
  }
    let selectedVendors: Vendor[] = [];
    for(let v of vends) {
      if(
        v.code.toLowerCase().includes(substr.toLowerCase())
        || (v.name !== null && v.name.toLowerCase().includes(substr.toLowerCase()))
        ) {
          selectedVendors.push(v);
        }
      }
      return selectedVendors;
    }
}