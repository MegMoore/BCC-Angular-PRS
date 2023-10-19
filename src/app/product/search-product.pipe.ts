import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  //sorting products
  transform(prods: Product[], substr: string = ""): Product[] {
    if(substr === ""){
    return prods;
  }
    let selectedProducts: Product[] = [];
    for(let p of prods) {
      if(
        p.partNbr.toLowerCase().includes(substr.toLowerCase())
        || (p.name !== null && p.name.toLowerCase().includes(substr.toLowerCase()))
        ) {
          selectedProducts.push(p);
        }
      }
      return selectedProducts;
    }
}