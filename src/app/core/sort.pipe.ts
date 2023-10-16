import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string = "id", asc: boolean = true): any[] {
    const compareFn = (a: any, b: any): number => {
      let  x = typeof a[column] === "number" ? a[column] : a[column].toString().toLowerCase();
      let  y = typeof b[column] === "number" ? b[column] : b[column].toString().toLowerCase();
      if(asc) {
        return (x>y) ? 1 : -1;
      } else {
        return (x>y) ? -1 : 1;
        
      }
    }
    return arr.sort(compareFn);
  }

}




 


